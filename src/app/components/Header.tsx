"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Try It Out", href: "#try-it" },
  { label: "Contact", href: "/contact" },
];

const BREAKPOINT = 900;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Determine desktop vs mobile after mount (avoids SSR mismatch)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #e2e8f0",
        background: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="botti logo"
            width={44}
            height={44}
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav — only rendered when wide enough */}
        {isDesktop && (
          <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              )
            )}
            <a
              href="#try-it"
              className="btn-primary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", whiteSpace: "nowrap" }}
            >
              Try It Out
            </a>
          </nav>
        )}

        {/* Mobile hamburger — only rendered on narrow screens */}
        {!isDesktop && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0f172a",
                borderRadius: "2px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0f172a",
                borderRadius: "2px",
                transition: "opacity 0.25s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0f172a",
                borderRadius: "2px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile slide-down menu */}
      {!isDesktop && menuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            padding: "1rem 1.25rem 1.5rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "#334155",
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "0.8rem 0",
                    borderBottom: "1px solid #f1f5f9",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "#334155",
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "0.8rem 0",
                    borderBottom: "1px solid #f1f5f9",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="#try-it"
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
              style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9375rem" }}
            >
              Try It Out
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
