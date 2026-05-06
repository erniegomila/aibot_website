"use client";

import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function DemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [agreed, setAgreed] = useState({
    privacy: false,
    terms: false,
    sms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    try {
      await fetch("https://formsubmit.co/ajax/botti@getbotti.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          _subject: "New Demo Request from " + form.name,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen" style={{ background: "#f8fafc" }}>
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              padding: "5rem 1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #4361ee, #5a75f5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "0.75rem",
              }}
            >
              You&rsquo;re all set!
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748b",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Your demo request has been received. We&rsquo;ll reach out shortly
              to schedule a time that works for you.
            </p>
            <Link
              href="/"
              className="btn-primary"
              style={{ padding: "0.7rem 2rem", fontSize: "0.95rem" }}
            >
              Back to Home
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#f8fafc" }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #4361ee 0%, #2d3fcf 100%)",
            padding: "4rem 1.5rem 3rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "0.75rem",
            }}
          >
            Book a Free Demo
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            See how botti can transform your customer conversations. No
            commitment, no credit card required.
          </p>
        </section>

        {/* Form card */}
        <div
          style={{
            maxWidth: "680px",
            margin: "-2rem auto 4rem",
            padding: "0 1.25rem",
          }}
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              background: "#ffffff",
              borderRadius: "1.25rem",
              padding: "2.5rem 2rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Name */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "0.4rem",
                }}
              >
                Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: `1.5px solid ${errors.name ? "#ef4444" : "#cbd5e1"}`,
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = errors.name
                    ? "#ef4444"
                    : "#4361ee")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.name
                    ? "#ef4444"
                    : "#cbd5e1")
                }
              />
              {errors.name && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "0.4rem",
                }}
              >
                Email Address <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: `1.5px solid ${errors.email ? "#ef4444" : "#cbd5e1"}`,
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = errors.email
                    ? "#ef4444"
                    : "#4361ee")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.email
                    ? "#ef4444"
                    : "#cbd5e1")
                }
              />
              {errors.email && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "0.4rem",
                }}
              >
                Phone Number <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: `1.5px solid ${errors.phone ? "#ef4444" : "#cbd5e1"}`,
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = errors.phone
                    ? "#ef4444"
                    : "#4361ee")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.phone
                    ? "#ef4444"
                    : "#cbd5e1")
                }
              />
              {errors.phone && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Company */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor="company"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "0.4rem",
                }}
              >
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company (optional)"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#4361ee")}
                onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "0.4rem",
                }}
              >
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your business or what you're looking for (optional)"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#4361ee")}
                onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
              />
            </div>

            {/* Divider */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e2e8f0",
                margin: "1.5rem 0",
              }}
            />

            {/* Agreements */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                marginBottom: "1.75rem",
              }}
            >
              {/* Privacy */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  checked={agreed.privacy}
                  onChange={() =>
                    setAgreed({ ...agreed, privacy: !agreed.privacy })
                  }
                  style={{
                    marginTop: "0.2rem",
                    accentColor: "#4361ee",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    style={{
                      color: "#4361ee",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Terms */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  checked={agreed.terms}
                  onChange={() =>
                    setAgreed({ ...agreed, terms: !agreed.terms })
                  }
                  style={{
                    marginTop: "0.2rem",
                    accentColor: "#4361ee",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    style={{
                      color: "#4361ee",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                  >
                    Terms and Conditions
                  </Link>
                  .
                </span>
              </label>

              {/* SMS Consent */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  checked={agreed.sms}
                  onChange={() => setAgreed({ ...agreed, sms: !agreed.sms })}
                  style={{
                    marginTop: "0.2rem",
                    accentColor: "#4361ee",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Yes, I agree to receive Customer Care messages from botti at
                  the phone number provided above. I understand that message
                  frequency varies based on my inquiry and account activity,
                  message and data rates may apply, and consent is not a
                  condition of purchase or service. You can unsubscribe at any
                  time by replying <strong>STOP</strong>. Reply{" "}
                  <strong>HELP</strong> for assistance. By checking this box, I
                  provide my express written consent to receive automated text
                  messages.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
                cursor: sending ? "not-allowed" : "pointer",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                opacity: sending ? 0.7 : 1,
              }}
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Request My Free Demo
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
