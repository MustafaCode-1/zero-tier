import React from "react";
import Image from "next/image";
import styles from "@/app/styles/quote.module.css";

const QuotePage = () => {
  const testimonials = [
    {
      quote:
        "In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us",
      author: "PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERG",
    },
    {
      quote:
        "ZeroTier provides a robust and essential backbone for our communications stack",
      author: "ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTIC",
    },
    {
      quote:
        "Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple",
      author: "BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITA",
    },
  ];
  return (
     <>
<h1 className={styles.quotePageHeading}>
Used by the world's most innovative teams
</h1>
      {testimonials && testimonials?.map((card) => (
         <div className={styles.quoteCards}>
<div className={styles.card}>
<Image
  src="/userprofile.png"
  alt="my logo image"
  width={50}
  height={50}
/>
<div className={styles.cardTextContainer}>
<h1 className={styles.quote}>
  {card.quote}
</h1>
<h1 className={styles.author}>
  {card.author}
</h1>
</div>
</div> 
    </div>
     ))}
     </>
  );
};

export default QuotePage;
