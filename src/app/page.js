import styles from "./page.module.css";
import Features from "./features/page";
import QuotePage from "./quotes/page";
import NetworkPage from "./networks/page";
import PricePage from "./prices/page";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <div className={styles.mainContent}>
      <h1 className={styles.heading}>
          Securely connect any device, anywhere.
        </h1>
        <p className={styles.text}>
          ZeroTier lets you build modern, secure multi-point virtualized
          networks of almost any type. From robust peer-to-peer networking to
          multi-cloud mesh infrastructure, we enable global connectivity with
          the simplicity of a local network.
        </p>
        <div className={styles.buttunsContainer}>
          <button className="nav-button">Get ZeroTier</button>
          <button className={styles.mainButton}>Learn more </button>
        </div>
      </div>
      </main>
      <Features />
      <QuotePage />
      <NetworkPage />
      <PricePage />
    </>
  );
}
