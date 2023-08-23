"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div>
        <Link href="#" >
            <Image
              src="/logo.svg"
              alt="my logo image"
              width={150}
              height={40}
            />
          </Link>
          <div>Securely Connecting The World's Devices.</div>
        </div>
        <div className={styles.footerLinks}>
          <h2>Get Started</h2>
          <ul>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Download</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h2>Support</h2>
          <ul>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Download</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h2>Company</h2>
          <ul>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Download</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.icons}>
  <ul className={styles.socialIcons}>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/github.svg"
          alt="GitHub"
          width={30}
          height={30}
        />
      </Link>
    </li>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </Link>
    </li>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/facebook.svg"
          alt="Facebook"
          width={30}
          height={30}
        />
      </Link>
    </li>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/youtube.svg"
          alt="YouTube"
          width={30}
          height={30}
        />
      </Link>
    </li>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/mastodon.svg"
          alt="Mastodon"
          width={30}
          height={30}
        />
      </Link>
    </li>
    <li className={styles.logo}>
      <Link href="#">
        <Image
          src="/twitter.svg"
          alt="Twitter"
          width={30}
          height={30}
        />
      </Link>
    </li>
  </ul>
</div>

<style jsx>{`
  .social-icons {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 0 10px;
  }

  .logo a {
    color: white;
    text-decoration: none;
  }
`}</style>

      <div className={styles.footerEnd}>
        <div>© 2023 ZeroTier, Inc. All rights reserved.</div>
        <div className={styles.footerLinks}>
          <ul className={styles.footerEnd}>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Download</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
