"use client";

import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!form.message.trim()) errs.message = "Message is required.";
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
          message: form.message,
          _subject: "New Contact Form Message from " + form.name,
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
              Thank you!
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748b",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Your message has been received. We&rsquo;ll be in touch shortly.
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
        {/* Hero section */}
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
            Get in Touch
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
            It&rsquo;s our pleasure to have a chance to cooperate.
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
                Phone No <span style={{ color: "#ef4444" }}>*</span>
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

            {/* Message */}
            <div style={{ marginBottom: "1.5rem" }}>
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
                Message <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: `1.5px solid ${errors.message ? "#ef4444" : "#cbd5e1"}`,
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = errors.message
                    ? "#ef4444"
                    : "#4361ee")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.message
                    ? "#ef4444"
                    : "#cbd5e1")
                }
              />
              {errors.message && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {errors.message}
                </p>
              )}
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
              {errors.privacy && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginLeft: "1.6rem",
                    marginTop: "-0.4rem",
                  }}
                >
                  {errors.privacy}
                </p>
              )}

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
              {errors.terms && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginLeft: "1.6rem",
                    marginTop: "-0.4rem",
                  }}
                >
                  {errors.terms}
                </p>
              )}

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
                  I consent to receive SMS messages from botti. Message and data
                  rates may apply. You can unsubscribe at any time by replying{" "}
                  <strong>STOP</strong>.
                </span>
              </label>
              {errors.sms && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    marginLeft: "1.6rem",
                    marginTop: "-0.4rem",
                  }}
                >
                  {errors.sms}
                </p>
              )}
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Contact info below the form */}
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.75rem",
                  background:
                    "linear-gradient(135deg, rgba(67,97,238,0.1), rgba(2,132,199,0.06))",
                  border: "1px solid rgba(67,97,238,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4361ee"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    fontWeight: 500,
                    marginBottom: "0.15rem",
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:botti@getbotti.com"
                  style={{
                    color: "#0f172a",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                  }}
                >
                  botti@getbotti.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
