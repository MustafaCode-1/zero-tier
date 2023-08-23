import Image from "next/image";
import React from "react";
import styles from "@/app/styles/price.module.css";

const PricePage = () => {
  return (
    <div className={styles.priceContainer}>
      <h1>Pricing</h1>
      <h3>ZeroTier makes networking easy for everyone - anywhere.</h3>
      <div className={styles.priceCards}>
        <div className={styles.priceCard}>
          <Image
            src="/white-logo.png"
            alt="my logo image"
            width={50}
            height={50}
          />
          <h1>Basic</h1>
          <p>For Everyone / ZeroTier Hosted Controller</p>
          <p>✓ 1 Admin</p>
          <p>✓ 25 Nodes</p>
          <p>✓ Unlimited Networks</p>
          <p>✖ Business SSO: n/a</p>
          <p>✓ Community Support</p>
          <p>Free</p>
          <button className={styles.priceButton}>Free Sign Up</button>
        </div>
        <div className={styles.priceCard} style={{border:'2px solid #ffb441'}}>
          <Image
            src="/orange-logo.png"
            alt="my logo image"
            width={50}
            height={50}
          />
          <h1>Professional</h1>
          <p>Licensed Only For Individuals and Testing</p>
          <p>✓ Admins | $10 USD/mo each</p>
          <p>✓ 25 Node Packs | $5 USD/mo</p>
          <p>✓ Unlimited Networks</p>
          <p>✓ Business SSO | $5 USD/mo per seat</p>
          <p>✓ Community Support</p>
          <p>Starting at $5 USD/month</p>
          <button className='nav-button'>Sign Up</button>
        </div>
        <div className={styles.priceCard} style={{border:'2px solid #4435ca'}}>
          <Image
            src="/blue-logo.png"
            alt="my logo image"
            width={50}
            height={50}
          />
          <h1>Business</h1>
          <p>Licensed for Commercial Deployments</p>
          <p>Use Cases Include:</p>
          <p>∙ IoT</p>
          <p>∙ SD-WAN</p>
          <p>∙ VPN</p>
          <p>∙ Remote Monitoring and Management</p>
          <p>Contact Sales for Pricing</p>
          <button className={styles.priceContactButton}>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
