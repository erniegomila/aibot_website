"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Try It Out", href: "#try-it" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #e2e8f0",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <Image
            src="/logo.png"
            alt="botti logo"
            width={44}
            height={44}
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
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
          <Link
            href="/terms"
            className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
          >
            View Terms
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "transform 0.3s, opacity 0.3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "opacity 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "transform 0.3s, opacity 0.3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{ background: "#ffffff", borderTop: "1px solid #e2e8f0", padding: "1.25rem 1.5rem 1.5rem" }}
          className="md:hidden"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{ color: "#475569", fontSize: "0.95rem", fontWeight: 500 }}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} style={{ color: "#475569", fontSize: "0.95rem", fontWeight: 500 }}>
                  {link.label}
                </Link>
              )
            )}
            <Link href="/terms" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: "0.5rem", textAlign: "center", fontSize: "0.875rem" }}>
              View Terms
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
