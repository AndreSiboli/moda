"use client";

import {
  MouseEvent,
  ReactElement,
  TouchEvent,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "@/styles/carousel/Carousel.module.scss";

interface PropsType {
  children: ReactElement[];
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

export default function CarouselProducts(props: PropsType) {
  const { children, parentConfig } = props;
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
  const allowShift = useRef(false);
  const dragging = useRef(false);
  const initialClick = useRef(0);
  const initialTimeClick = useRef(0);
  const translate = useRef(0);
  const intervalAnimation = useRef<NodeJS.Timeout>();

  function fixItemPerView() {
    const width = window.innerWidth;

    if (width <= 768) {
      setConfig((prevState) => ({
        ...prevState,
        itemsPerView: 2,
        itemsAppearance: 2,
        margin: 8,
        slide: true,
      }));
      return;
    }

    setConfig((prevState) => ({
      ...prevState,
      itemsPerView: 1,
      margin: 16,
      itemsAppearance: config.itemsLength,
      slide: false,
    }));
  }

  //It'll fix the size on first loading
  useEffect(() => {
    const move = calculateNextMove(currentPosition);
    moveCarousel(move);
    fixItemPerView();
  }, []);

  //Always the user resize the page, it'll fix the carousel
  useEffect(() => {
    function resize() {
      fixItemPerView();
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [currentPosition, config]);

  useEffect(() => {
    const move = calculateNextMove(0);
    moveCarousel(move);
    setCurrentPosition(0);
  }, [config]);

  //This calculate exactly the next move
  function calculateNextMove(currentPos: number) {
    const parentElement = parentRef.current;
    const childElement = wrapperRef.current;
    if (!parentElement || !childElement) return 0;

    const childrenWidth = childElement.children[0].clientWidth;
    const marginLeftRight = config.margin;
    const itemTotalWidth = childrenWidth + marginLeftRight;
    const movePerSlide = itemTotalWidth * config.itemsPerView;

    const totalItems = childElement.children.length;
    const remainderItems = totalItems % config.itemsPerView;
    const totalSlides = totalItems / config.itemsPerView - 1;
    const gapItemAndSpace = 24;

    if (currentPos >= totalSlides && remainderItems !== 0) {
      const leftItemsWidth = remainderItems * itemTotalWidth;
      return movePerSlide * (currentPos - 1) + leftItemsWidth - gapItemAndSpace;
    }
    if (currentPos === totalSlides)
      return movePerSlide * currentPos - gapItemAndSpace;

    return movePerSlide * currentPos;
  }

  function moveCarousel(to: number) {
    if (!wrapperRef.current) return;
    to >= 0
      ? (wrapperRef.current.style.transform = `translate3d(-${to}px, 0, 0)`)
      : (wrapperRef.current.style.transform = `translate3d(${Math.abs(
          to
        )}px, 0, 0)`);
  }

  //this is the core function
  function changeItem(num: 1 | 0 | -1) {
    if (!wrapperRef.current || dragging.current || allowShift.current) return;
    const nextItem = currentPosition + num;
    const children = wrapperRef.current.childNodes.length;
    const movement = (children - 1) / config.itemsPerView;

    if (nextItem < 0 || nextItem > movement) {
      return;
    }

    const moveTo = calculateNextMove(nextItem);
    allowShift.current = true;
    addAnimation(true);
    moveCarousel(moveTo);
    clearAnimation();
    clearShift();
    setCurrentPosition(nextItem);
  }

  function addAnimation(current: boolean) {
    if (!wrapperRef.current) return;

    wrapperRef.current.className = `${styles.carousel_wrapper} ${
      current && styles.animation
    }`;
  }

  function clearAnimation() {
    if (intervalAnimation.current) {
      clearTimeout(intervalAnimation.current);
    }

    intervalAnimation.current = setTimeout(() => {
      addAnimation(false);
    }, config.animationTime);
  }

  function clearShift() {
    setTimeout(() => {
      allowShift.current = false;
    }, config.animationTime);
  }

  //MOBILE FUNCTIONS

  function dragStart(e: MouseEvent | TouchEvent) {
    if (!config.slide) return;
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper || allowShift.current) return;

    dragging.current = true;

    const style = window.getComputedStyle(wrapper);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentTranslateX = matrix.m41;
    translate.current = Number(currentTranslateX);
    initialTimeClick.current = e.timeStamp;

    if ("touches" in e) {
      initialClick.current = -e.touches[0].pageX;
    } else {
      initialClick.current = -e.pageX;
    }
  }

  function dragMove(e: MouseEvent | TouchEvent) {
    if (!config.slide) return;

    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper || !dragging.current || allowShift.current) return;
    let getCurrentGrab = 0;

    if ("touches" in e) {
      getCurrentGrab =
        translate.current - (-e.touches[0].clientX - initialClick.current);
    } else {
      getCurrentGrab = translate.current - (-e.pageX - initialClick.current);
    }

    if (-getCurrentGrab <= -50) return;
    wrapper.style.transform = `translate3d(${getCurrentGrab}px, 0, 0)`;

    parent.style.cursor = "grabbing";
  }

  function dragEnd(e: MouseEvent | TouchEvent) {
    if (!config.slide) return;

    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper) return;
    dragging.current = false;
    if (allowShift.current) return;

    parent.style.cursor = "auto";
    const width = parent.clientWidth;
    const howFast = e.timeStamp - initialTimeClick.current;

    function movement(position: number) {
      if (
        initialClick.current < -position - width / 2 ||
        (howFast <= 200 && initialClick.current < -position - 25)
      ) {
        changeItem(1);
        return;
      }
      if (
        initialClick.current > -position + width / 2 ||
        (howFast <= 200 && initialClick.current > -position + 25)
      ) {
        changeItem(-1);
        return;
      }
      changeItem(0);
    }

    if ("touches" in e) {
      const pos = e.changedTouches[0].pageX;
      movement(pos);
    } else {
      const pos = e.pageX;
      movement(pos);
    }
  }

  function dragOut(e: MouseEvent | TouchEvent) {
    dragging.current = false;
  }

  return (
    <div
      className={styles.carousel}
      ref={parentRef}
      style={{ maxWidth: `${config.parentWidth}` }}
    >
      <div
        className={`${styles.carousel_wrapper}`}
        ref={wrapperRef}
        style={{
          gap: `${config.margin}px`,
          gridTemplateColumns: `repeat(${config.itemsLength}, calc(100% / ${config.itemsAppearance} - 1em))`,
        }}
        onMouseDown={(e) => dragStart(e)}
        onMouseMove={(e) => dragMove(e)}
        onMouseUp={(e) => dragEnd(e)}
        onMouseOut={(e) => dragOut(e)}
        onTouchStart={(e) => dragStart(e)}
        onTouchMove={(e) => dragMove(e)}
        onTouchEndCapture={(e) => dragEnd(e)}
      >
        {children.map((item) =>
          cloneElement(item, {
            style: {},
          })
        )}
      </div>
    </div>
  );
}
