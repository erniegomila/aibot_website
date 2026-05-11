import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for Photographers & Videographers",
  description:
    "botti answers package inquiries, books shoots, and follows up with leads 24/7 for photographers and videographers. Stop chasing DMs — book more clients. Free demo.",
  keywords: [
    "AI for photographers",
    "photographer chatbot",
    "wedding photographer booking bot",
    "videographer lead capture",
    "photography business automation",
    "photography SMS bot",
    "photographer inquiry automation",
    "photography client booking",
  ],
};

const content: IndustryContent = {
  badge: "For Photographers & Videographers",
  headline: "Book more shoots,",
  headlineHighlight: "spend less time in your inbox",
  subheadline:
    "You should be behind the camera, not answering 'how much for a wedding?' for the tenth time today. botti handles inquiries, shares packages, and books consults — automatically.",
  painPoints: [
    {
      title: "Inquiries pile up while you're on a shoot",
      desc: "You can't reply to DMs and emails when your hands are on a camera. By the time you respond, leads have gone cold.",
    },
    {
      title: "Same package questions over and over",
      desc: "'What's included?' 'Do you travel?' 'How many photos?' — every single inquiry asks the same things. It's draining and repetitive.",
    },
    {
      title: "Leads ghost before you can follow up",
      desc: "Engaged couples and clients shop fast. If you don't reply in minutes, they've already DM'd three other photographers.",
    },
  ],
  useCases: [
    {
      title: "Reply to inquiries instantly",
      desc: "Every DM, form submission, or text gets an immediate, on-brand reply — even at 11 PM after an engagement.",
    },
    {
      title: "Share package details & pricing",
      desc: "botti sends pricing PDFs, package breakdowns, and travel fees automatically — qualifying leads before you ever pick up the phone.",
    },
    {
      title: "Book consults & discovery calls",
      desc: "Sync with your calendar so prospects can book a call at a time that works for both of you. No back-and-forth scheduling.",
    },
    {
      title: "Collect shoot details upfront",
      desc: "Date, location, headcount, style preferences — botti gathers everything so you walk into the consult fully prepped.",
    },
    {
      title: "Follow up with cold leads",
      desc: "Automated check-ins for prospects who went quiet. Recover bookings you'd otherwise lose to ghosting.",
    },
    {
      title: "Send gallery & delivery updates",
      desc: "Let clients know when previews are ready, galleries are delivered, or albums are shipping — without lifting a finger.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hi! Do you shoot weddings? Looking for something next October" },
    { from: "botti", text: "Yes! Congrats on the engagement 🎉 I have availability in October. Our wedding packages start at $3,500. Want me to send the full guide?" },
    { from: "customer", text: "Yes please" },
    { from: "botti", text: "Just sent it to your email. Want to book a quick discovery call this week to chat more?" },
    { from: "customer", text: "Sure! Thursday evening works" },
    { from: "botti", text: "Booked you for Thursday at 6 PM. You'll get a Zoom link the day before 📸" },
  ],
  ctaHeading: "Stop chasing leads, start booking them",
  ctaSubtext:
    "Book a free demo and see how botti can convert more inquiries into paying clients while you focus on the work you love.",
};

export default function PhotographyPage() {
  return <IndustryPage content={content} />;
}
