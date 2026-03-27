import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="botti logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <div className="text-lg font-semibold text-slate-900">botti</div>
        </div>

        <Link
          href="/"
          className="text-sm font-medium text-slate-900 underline underline-offset-4"
        >
          ← Back to Home
        </Link>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <div className="text-sm font-medium text-sky-600">Privacy Policy</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            botti Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective date: March 27, 2026
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Overview
              </h2>
              <p className="mt-3">
                botti respects your privacy and is committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, and safeguard information when you communicate
                with us through our website, SMS, WhatsApp, or other messaging
                channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Information We Collect
              </h2>
              <p className="mt-3">
                We may collect your name, phone number, email address, message
                content, and any other information you voluntarily provide when
                contacting us, requesting support, or using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                How We Use Information
              </h2>
              <p className="mt-3">
                We use the information we collect to respond to inquiries,
                provide support, deliver requested updates, improve our
                services, and maintain the security and reliability of our
                platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Messaging Privacy
              </h2>
              <p className="mt-3">
                Mobile information will not be shared, sold, or transferred to
                third parties or affiliates for marketing or promotional
                purposes. Messaging data is used only to provide the services
                requested by the user and to support operational communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Data Security
              </h2>
              <p className="mt-3">
                We take reasonable administrative, technical, and organizational
                measures to protect information from unauthorized access, loss,
                misuse, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Your Choices
              </h2>
              <p className="mt-3">
                You may opt out of SMS communications at any time by replying
                STOP. For assistance, reply HELP or contact us directly through
                our contact page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Policy Updates
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}