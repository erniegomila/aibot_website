import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for Home Service Businesses",
  description:
    "botti captures quote requests, books service calls, and answers customer questions 24/7 for plumbers, HVAC, electricians, and home service pros. Book a free demo.",
  keywords: [
    "AI for home services",
    "HVAC SMS bot",
    "plumber chatbot",
    "electrician booking automation",
    "home services lead capture",
    "service business messaging",
    "quote request automation",
  ],
};

const content: IndustryContent = {
  badge: "For Home Service Pros",
  headline: "Capture every lead,",
  headlineHighlight: "even on the job",
  subheadline:
    "You can't answer the phone with your hands in someone's sink. botti captures every quote request, books service calls, and answers customer questions — while you focus on the work.",
  painPoints: [
    {
      title: "Missed calls = missed jobs",
      desc: "Every call you don't answer is a customer calling your competitor. You can't be in two places at once.",
    },
    {
      title: "Quote requests get lost",
      desc: "Customers fill out your form, but by the time you follow up, they've already booked someone else.",
    },
    {
      title: "Same questions, every day",
      desc: "'Do you do emergency calls?' 'How much is a service call?' 'What's your coverage area?' — botti can answer them instantly.",
    },
  ],
  useCases: [
    {
      title: "Capture quote requests 24/7",
      desc: "Whether it's a midnight pipe burst or a Sunday AC failure, botti collects all the details so you can quote first thing.",
    },
    {
      title: "Book service appointments",
      desc: "Customers can request a time slot and botti confirms based on your availability. No more phone tag.",
    },
    {
      title: "Answer pricing & service questions",
      desc: "Standard service fees, what's covered, response times, financing options — botti pulls answers from your knowledge base.",
    },
    {
      title: "Dispatch updates by SMS",
      desc: "Let customers know when your tech is on the way, running late, or arriving in 10 minutes — automatically.",
    },
    {
      title: "After-hours emergency routing",
      desc: "Real emergencies escalate to a human immediately. Non-urgent requests get booked for the next business day.",
    },
    {
      title: "Follow up for reviews",
      desc: "After every job, botti sends a friendly follow-up asking how it went and pointing happy customers to your review pages.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hi, my AC stopped working overnight. Do you do emergency calls?" },
    { from: "botti", text: "Sorry to hear that! Yes, we offer 24/7 emergency service. Can I get your address?" },
    { from: "customer", text: "123 Main St, Miami" },
    { from: "botti", text: "Got it. Our tech can be there in about 90 minutes — emergency service call is $149. Want me to dispatch?" },
    { from: "customer", text: "Yes please" },
    { from: "botti", text: "Dispatched! Mike is on the way. You'll get a text when he's 10 min out 🛠️" },
  ],
  ctaHeading: "Stop losing jobs to missed messages",
  ctaSubtext:
    "Book a free demo and see how botti can capture every lead, book more jobs, and save your team hours every day.",
};

export default function HomeServicesPage() {
  return <IndustryPage content={content} />;
}
