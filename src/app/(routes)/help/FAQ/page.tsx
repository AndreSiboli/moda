import styles from "@/styles/pages/help/FAQ.module.scss";

import Container from "@/components/layout/Container";
import Details from "@/components/buttons/Details";
import Img from "@/components/utils/Img";

import heroWallpaper from "@/assets/faq.jpg";


export default function FAQ() {
  const questions = [
    {
      title: "Can I resell in my store?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "What payment methods do you have?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "Can I cancel my order?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "Can I personilize my items?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "How do I know my size?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "Where are Moda products made?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "Why is my account not working?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "What is Moda?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
    {
      title: "Are my products delivered?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repellat tempore impedit est ab eligendi, ducimus optio dolore quis inventore provident excepturi atque sint molestias totam corporis cum obcaecati fugiat?",
    },
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.faq_images}>
        <figure className={styles.image_container}>
          <Img src={heroWallpaper} styles={{objectPosition: '50% 10%'}}/>
        </figure>
      </div>
      <Container>
        <div className={styles.faq_container}>
          <div className={styles.faq_title}>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className={styles.faq_wrapper}>
            {questions.map((question) => (
              <Details
                data={question}
                key={question.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
