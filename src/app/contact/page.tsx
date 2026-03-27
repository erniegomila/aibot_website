import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
          <div className="text-sm font-medium text-sky-600">Contact</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Contact botti
          </h1>
          <p className="mt-4 leading-8 text-slate-600">
            For questions about our services, messaging practices, privacy, or
            terms, please contact us using the information below.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm text-slate-500">Business Name</div>
              <div className="mt-1 font-medium text-slate-900">botti</div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm text-slate-500">Website</div>
              <div className="mt-1 font-medium text-slate-900">
                getbotti.com
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm text-slate-500">Email</div>
              <div className="mt-1 font-medium text-slate-900">
                contact@getbotti.com
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm text-slate-500">Support Hours</div>
              <div className="mt-1 font-medium text-slate-900">
                Monday - Friday, 9 AM - 5 PM
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 sm:col-span-2">
              <div className="text-sm text-slate-500">Address</div>
              <div className="mt-1 font-medium text-slate-900">
                Your business address goes here
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Messaging Support
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Users may reply STOP to opt out of SMS messages at any time.
              Reply HELP for assistance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}