import Image from "next/image";
import React from "react";
import styles from "@/app/styles/feature.module.css";

const Features = () => {
  return (
    <div className={styles.featureContext}>

      <div className={styles.featureBox}>
        <Image src="/card1.png" alt="my logo image" width={400} height={400} />
        <div className={styles.featureContext}>
          <h1 className={styles.featureHeading}>It just works</h1>
          <p className={styles.featureText}>
            ZeroTier combines the capabilities of VPN and SD-WAN, simplifying
            network management. Enjoy flexibility while avoiding costly hardware
            vendor lock in.
          </p>
          <button className={styles.featureButtons}>Learn more</button>
        </div>
      </div>
      <div className={styles.featureBoxSec}>
        <div className={styles.featureContext}>
          <h1 className={styles.featureHeading}>Speed, flexibility, and security</h1>
          <p className={styles.featureText}>
            ZeroTier combines the capabilities of VPN and SD-WAN, simplifying
            network management. Enjoy flexibility while avoiding costly hardware
            vendor lock in.
          </p>
          <button className={styles.featureButtons}>Get ZeroTier</button>
        </div>
<Image src="/card2.png" alt="my logo image" width={400} height={400} />
      </div>
  </div>
    );
};

export default Features;
