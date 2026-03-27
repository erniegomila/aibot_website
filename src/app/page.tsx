import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="botti logo"
              width={88}
              height={88}
              className="h-[88px] w-auto object-contain"
              priority
            />
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How It Works
            </a>
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              Modern AI messaging platform
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Smarter customer conversations, without the busywork.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              botti helps businesses respond faster through web chat, SMS, and
              WhatsApp with AI-powered messaging and easy human handoff when
              needed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                View Terms
              </Link>
              <Link
                href="/privacy"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
              <div className="text-sm font-medium text-sky-600">
                Messaging Use Case
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                Customer support and business inquiries
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We use messaging to answer customer questions, provide service
                information, handle support inquiries, send requested updates,
                and follow up on services.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">Supported channels</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  SMS • WhatsApp • Web Chat
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">Consent based</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  Users opt in or message first
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            About botti
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            botti is a customer messaging platform designed to help businesses
            communicate more efficiently. Our system uses AI to answer common
            questions, provide service information, improve response times, and
            route conversations to a human when needed.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-8 md:py-12"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Customer opts in",
              text: "Users provide consent by submitting a form, starting a conversation, or requesting communication about services.",
            },
            {
              title: "2. Helpful messages are sent",
              text: "Messages may include support responses, appointment or service information, and requested follow-ups.",
            },
            {
              title: "3. Users can opt out anytime",
              text: "Recipients can stop receiving SMS messages at any time by replying STOP.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="text-sm font-medium text-sky-600">
              Privacy & trust
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Clear policies for customers and carriers
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Our website includes clear Terms & Conditions, Privacy Policy,
              contact details, and messaging disclosures to support transparent
              communication and compliance.
            </p>
            <div className="mt-6">
              <Link
                href="/privacy"
                className="text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="text-sm font-medium text-sky-600">
              Contact & support
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Reach us directly
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Questions about messaging, consent, privacy, or support can be
              directed to our team through the contact page.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-900 underline underline-offset-4"
              >
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 botti. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}