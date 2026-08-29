export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Live Discovery",
    icon: "follow-up",
    account: "Customer call",
    signal: "Customer call started",
    work:
      "I am separating confirmed needs from open questions and adding relevant Caterpillar product and service sources while the seller leads the conversation.",
    result: "Customer brief and follow-up ready",
    user: "keep the follow-up as a draft",
    bot: "done. nothing has been sent.",
  },
  {
    name: "Product Answers",
    icon: "deal-desk",
    account: "Customer question",
    signal: "Product question received",
    work:
      "I found the relevant Caterpillar product information, kept the source trail, and marked the point that still needs a specialist.",
    result: "Sourced product answer ready",
    user: "leave the open point for the specialist",
    bot: "marked. the rest is ready for review.",
  },
  {
    name: "Service Context",
    icon: "renewal",
    account: "Service conversation",
    signal: "Service question received",
    work:
      "I gathered the available service information and organized the questions the seller should confirm before recommending a next step.",
    result: "Service follow-up draft ready",
    user: "keep the recommendation out for now",
    bot: "done. the draft only includes confirmed context.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Target account",
    signal: "Public project update found",
    work:
      "I saved the original public sources, separated facts from hypotheses, and prepared questions to test in a first conversation.",
    result: "Public project brief ready",
    user: "brief me before I reach out",
    bot: "ready. the source links are attached.",
  },
  {
    name: "Meeting Prep",
    icon: "competitive",
    account: "Upcoming customer meeting",
    signal: "Meeting added to the calendar",
    work:
      "I gathered the approved account context, recent questions, and open follow-ups so the seller can start with what matters.",
    result: "Meeting brief ready",
    user: "put the open questions first",
    bot: "updated. the brief is ready.",
  },
  {
    name: "Dealer Follow-up",
    icon: "outbound",
    account: "Dealer follow-up",
    signal: "Customer handoff needs an owner",
    work:
      "I organized the customer request, the available context, and the open ownership question into one draft for review.",
    result: "Handoff note ready",
    user: "do not send until the owner is confirmed",
    bot: "understood. it will stay a draft.",
  },
  {
    name: "Fleet Brief",
    icon: "pipeline",
    account: "Fleet conversation",
    signal: "New fleet need captured",
    work:
      "I brought the equipment, service, and operating context into one brief and kept every unconfirmed point clearly labeled.",
    result: "Fleet conversation brief ready",
    user: "show me what still needs confirmation",
    bot: "the open points are at the top.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Seller work queue",
    signal: "Open drafts and questions changed",
    work:
      "I gathered the active customer briefs, unanswered questions, and drafts waiting for review, then organized the next decisions.",
    result: "Seller work brief ready",
    user: "keep customer sends behind my approval",
    bot: "yes. nothing sends without your review.",
  },
];
