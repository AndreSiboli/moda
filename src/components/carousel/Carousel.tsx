"use client";

import {
  MouseEvent,
  ReactElement,
  TouchEvent,
  cloneElement,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import styles from "@/styles/carousel/Carousel.module.scss";

interface CarouselProps {
  children: ReactElement<{
    onClick?: (e: MouseEvent) => void;
    draggable?: boolean;
  }>[];
  parentConfig?: {
    animationTime?: number;
    parentWidth?: string;
    margin?: number;
    slide?: boolean;
    itemsPerView?: number;
    itemsAppearance?: number;
    itemsLength?: number;
  };
}

export default function CarouselProducts({
  children,
  parentConfig,
}: CarouselProps) {
  const [config, setConfig] = useState({
    animationTime: 200,
    parentWidth: "100%",
    margin: 8,
    slide: false,
    itemsPerView: 4,
    itemsAppearance: 1,
    itemsLength: 4,
    ...parentConfig,
  });

  const [currentPosition, setCurrentPosition] = useState(0);

  const parentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isShiftAllowed = useRef(false);
  const wasDragged = useRef(false);
  const startPosition = useRef(0);
  const startTime = useRef(0);
  const initialTranslate = useRef(0);
  const animationTimeout = useRef<NodeJS.Timeout>(undefined);

  const fixItemsPerView = useCallback(() => {
    const width = window.innerWidth;
    setConfig((prev) => ({
      ...prev,
      itemsPerView: width <= 768 ? 2 : 1,
      itemsAppearance: width <= 768 ? 2 : config.itemsLength,
      margin: width <= 768 ? 8 : 16,
      slide: width <= 768,
    }));
  }, [config.itemsLength]);

  useEffect(() => {
    fixItemsPerView();
    moveCarousel(calculateNextMove(currentPosition));
  }, []);

  useEffect(() => {
    const handleResize = () => fixItemsPerView();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fixItemsPerView]);

  useEffect(() => {
    moveCarousel(calculateNextMove(0));
    setCurrentPosition(0);
  }, [config]);

  const calculateNextMove = (position: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 0;

    const child = wrapper.children[0] as HTMLElement;
    if (!child) return 0;

    const itemWidth = child.clientWidth + config.margin;
    const totalItems = wrapper.children.length;
    const slides = Math.floor((totalItems - 1) / config.itemsPerView);
    const remainder = totalItems % config.itemsPerView;

    const movePerSlide = itemWidth * config.itemsPerView;
    const endGap = 24;

    if (position >= slides && remainder !== 0) {
      return movePerSlide * (position - 1) + itemWidth * remainder - endGap;
    }

    return movePerSlide * position - (position === slides ? endGap : 0);
  };

  const moveCarousel = (to: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.style.transform = `translate3d(-${to}px, 0, 0)`;
  };

  const changeItem = (delta: -1 | 0 | 1) => {
    if (isDragging.current || isShiftAllowed.current) return;
    const next = currentPosition + delta;
    const totalItems = wrapperRef.current?.childNodes.length || 0;
    const maxPosition = Math.floor((totalItems - 1) / config.itemsPerView);

    if (next < 0 || next > maxPosition) return;

    isShiftAllowed.current = true;
    addAnimation(true);
    moveCarousel(calculateNextMove(next));
    clearTimeout(animationTimeout.current!);

    animationTimeout.current = setTimeout(() => {
      addAnimation(false);
      isShiftAllowed.current = false;
    }, config.animationTime);

    setCurrentPosition(next);
  };

  const addAnimation = (isEnabled: boolean) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.className = `${styles.carousel_wrapper} ${
      isEnabled ? styles.animation : ""
    }`;
  };

  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    if (!config.slide || isShiftAllowed.current) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    isDragging.current = true;
    wasDragged.current = false;
    const matrix = new WebKitCSSMatrix(
      window.getComputedStyle(wrapper).transform
    );
    initialTranslate.current = matrix.m41;
    startTime.current = e.timeStamp;

    startPosition.current = "touches" in e ? -e.touches[0].pageX : -e.pageX;
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current || isShiftAllowed.current) return;
    const wrapper = wrapperRef.current;
    const parent = parentRef.current;
    if (!wrapper || !parent) return;

    const currentX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const offset = -(currentX + startPosition.current);
    const position = initialTranslate.current - offset;

    wasDragged.current = true;
    if (-position <= -50) return;

    wrapper.style.transform = `translate3d(${position}px, 0, 0)`;
    parent.style.cursor = "grabbing";
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent) => {
    if (!config.slide) return;
    isDragging.current = false;
    const parent = parentRef.current;
    if (parent) parent.style.cursor = "auto";

    if (isShiftAllowed.current) return;

    const width = parent?.clientWidth || 0;
    const duration = e.timeStamp - startTime.current;
    const clientX = "changedTouches" in e ? e.changedTouches[0].pageX : e.pageX;

    const threshold = duration <= 200 ? 25 : width / 2;

    if (startPosition.current < -clientX - threshold) return changeItem(1);
    if (startPosition.current > -clientX + threshold) return changeItem(-1);

    changeItem(0);
    setTimeout(() => (wasDragged.current = false), 0);
  };

  const handleLinkClick = (e: MouseEvent) => {
    if (wasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      wasDragged.current = false;
    }
  };

  return (
    <div
      className={styles.carousel}
      ref={parentRef}
      style={{ maxWidth: config.parentWidth }}
    >
      <div
        ref={wrapperRef}
        className={styles.carousel_wrapper}
        style={{
          gap: `${config.margin}px`,
          gridTemplateColumns: `repeat(${config.itemsLength}, calc(100% / ${config.itemsAppearance} - 1em))`,
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseOut={() => (isDragging.current = false)}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEndCapture={handleDragEnd}
      >
        {children.map((child) =>
          cloneElement(child, {
            onClick: handleLinkClick,
            draggable: false,
          })
        )}
      </div>
    </div>
  );
}
