import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
          <div className="text-sm font-medium text-sky-600">
            Terms & Conditions
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            botti Terms & Conditions
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
                By using botti and communicating with us through our website,
                SMS, WhatsApp, or other messaging channels, you agree to these
                Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Consent to Receive Messages
              </h2>
              <p className="mt-3">
                By providing your phone number and opting in, you consent to
                receive conversational, service-related, and support-related
                text messages from botti. Message frequency may vary depending
                on your interactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Message and Data Rates
              </h2>
              <p className="mt-3">
                Message and data rates may apply depending on your wireless
                carrier plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Opt-Out Instructions
              </h2>
              <p className="mt-3">
                You can opt out of receiving SMS messages at any time by
                replying STOP. For assistance, reply HELP.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Acceptable Use
              </h2>
              <p className="mt-3">
                Users agree not to misuse the service, submit unlawful content,
                attempt unauthorized access, or interfere with the normal
                operation of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Service Availability
              </h2>
              <p className="mt-3">
                We strive to keep our services available and accurate, but we do
                not guarantee uninterrupted or error-free operation at all
                times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms & Conditions from time to time.
                Continued use of the service after updates constitutes
                acceptance of the revised terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}