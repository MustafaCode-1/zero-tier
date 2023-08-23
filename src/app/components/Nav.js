"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="navbar-container">
          <Link href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="my logo image"
              width={150}
              height={40}
            />
          </Link>
          <div className="navbar-content">
            <Link href="#" className={`nav-button ${menuOpen ? "open" : ""}`}>
              Sign Up
            </Link>

            <div
              className={`nav-toggle ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <span className="cross-mark">✕</span>
              ) : (
                <>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </>
              )}
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="prices">Pricing</Link>
              </li>
              <li>
                <Link href="quotes">Download</Link>
              </li>
              <li>
                <Link href="networks">Company</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
              {menuOpen ? (
                <Link href="#" >Login</Link>
              ) : (
                <Link href="#" className="nav-login-btn">
                  Login
                </Link>
              )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
