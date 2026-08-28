import type { Artifact, CroJob, SlideCard } from "./types";

export const CATERPILLAR_TAIL_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "Confirmed on the call",
    voice: "them",
    title: "Customer need",
    body: "Product, service, and fleet needs confirmed in the conversation appear here.",
  },
  {
    n: 5,
    kicker: "Caterpillar context",
    voice: "us",
    title: "Relevant information",
    body: "The agent adds useful product and service context with its source trail.",
  },
  {
    n: 6,
    kicker: "Still open",
    voice: "them",
    title: "Questions to confirm",
    body: "Open questions stay separate from what the customer has already confirmed.",
  },
  {
    n: 7,
    kicker: "Ready for the seller",
    voice: "us",
    title: "Next conversation",
    body: "A clear next step and follow-up draft are ready before the meeting ends.",
  },
];

export const CATERPILLAR_ANSWER: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: "Product and service answer",
  paperTitle: "Customer questions",
  from: "Customer question",
  marks: [
    {
      text: "Which product information applies to this need?",
      note: "The draft links the relevant Caterpillar information and keeps the source attached.",
      take: true,
    },
    {
      text: "Which service options should we discuss?",
      note: "Available service context is summarized for the seller without guessing at fit.",
      take: true,
    },
    {
      text: "What still needs a specialist?",
      note: "Anything unclear is marked for a Caterpillar product or service specialist.",
      take: true,
    },
  ],
  reply: {
    to: "Customer team",
    subject: "Product and service follow-up",
    body: "Hi,\n\nI pulled together the product and service information related to your question. The source links are included below, along with the point I still want to confirm with a Caterpillar specialist.\n\nBest,",
  },
};

export const CATERPILLAR_OUTBOUND: Extract<
  Artifact,
  { kind: "outbound" }
> = {
  kind: "outbound",
  title: "Public project brief",
  account: "Target account",
  hypothesis: [
    {
      k: "Why Caterpillar",
      body: "The public project suggests an equipment, service, or fleet need worth testing.",
    },
    {
      k: "Why now",
      body: "A current public update gives the seller a useful reason to start the conversation.",
    },
    {
      k: "Why this team",
      body: "The brief points to the operating team named in public sources without inventing a buyer.",
    },
  ],
  evidence: [
    {
      source: "Public project page",
      finding: "The original project update and date stay attached to the brief.",
    },
    {
      source: "Company newsroom",
      finding: "Related public context is summarized and linked.",
    },
    {
      source: "Public hiring page",
      finding: "Relevant operating priorities are kept separate from hypotheses.",
    },
  ],
  targets: [
    {
      name: "Operating team",
      role: "Owner to confirm",
      why: "The public source connects this team to the project.",
    },
    {
      name: "Fleet or service team",
      role: "Owner to confirm",
      why: "The first conversation should confirm whether they own the need.",
    },
  ],
  page: {
    headline: "Public project context for a first conversation",
    body: "The brief keeps evidence, possible fit, and open questions separate so the seller can test the idea.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update customer briefs in real time",
    trigger: "A customer call starts",
    backgroundAction: "Listening to discovery and updating the open brief",
    problem:
      "Important product, service, and fleet context can be hard to capture while the seller is leading the conversation.",
    botJob:
      "Grok Bot follows the approved call, keeps confirmed needs separate from open questions, and updates the working brief while the conversation is still live.",
    storyboard: [
      {
        when: "Call begins",
        label: "The seller starts the workflow. Grok Bot begins listening.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Customer discovery",
          people: [
            { initials: "YOU", name: "You" },
            { initials: "CAT", name: "Caterpillar" },
            { initials: "CUS", name: "Customer team" },
          ],
        },
      },
      {
        when: "Needs are confirmed",
        label: "The working notes separate needs from open questions.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          timestamp: "Live",
          speaker: "Working notes",
          quote:
            "Product, service, and fleet context are organized as the conversation develops.",
          signals: ["Confirmed needs", "Open questions"],
        },
      },
      {
        when: "Context is ready",
        label: "The agent adds relevant Caterpillar information and sources.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Customer brief",
          headline: "Needs and next questions",
          product: "Product and service context",
          status: "Brief updated",
        },
      },
      {
        when: "Before the call ends",
        label: "The finished brief is ready for the seller to use.",
        scene: "deck",
        slides: CATERPILLAR_TAIL_SLIDES,
      },
    ],
    unlock:
      "A customer-specific brief and follow-up are ready while the conversation is still fresh.",
    outcome:
      "One live call becomes a sourced customer brief before the meeting ends.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Customer brief",
      subtitle: "Live discovery and sourced context",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Discovery",
          role: "bot",
          persona: "Turns customer discovery into a working brief",
          color: "#FFCC00",
        },
        {
          id: "slides",
          name: "Brief",
          role: "bot",
          persona: "Adds relevant Caterpillar context and prepares the follow-up",
          color: "#5B6670",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "The customer call started. I am tracking confirmed needs and open questions while you lead the conversation.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "The working notes are organized. I am adding relevant product and service information with the source trail.",
        },
        {
          id: "m3",
          from: "slides",
          kind: "draft",
          draftLabel: "Customer brief",
          artifact: {
            kind: "slides",
            title: "Customer brief",
            cards: CATERPILLAR_TAIL_SLIDES,
          },
        },
        {
          id: "m4",
          from: "room",
          kind: "draft",
          draftLabel: "One-page follow-up",
          artifact: {
            kind: "one-pager",
            title: "Customer follow-up",
            eyebrow: "Working draft",
            sections: [
              {
                heading: "Needs",
                body: "The needs confirmed during the conversation.",
              },
              {
                heading: "Caterpillar context",
                body: "Relevant product and service information with its sources.",
              },
              {
                heading: "Open questions",
                body: "The points to confirm in the next conversation.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "system",
          body: "The brief and follow-up are ready. Nothing has been sent.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Find product and service answers fast",
    trigger: "A customer question lands",
    backgroundAction: "Searching Caterpillar sources and drafting an answer",
    problem:
      "A customer question can send a seller across product pages, service information, and internal experts before a useful answer is ready.",
    botJob:
      "Grok Bot finds the relevant Caterpillar information, keeps the source trail, marks anything that needs a specialist, and prepares the reply.",
    storyboard: [
      {
        when: "Question received",
        label: "The customer message starts the work.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Customer team",
          subject: "Product and service question",
          questions: "New",
        },
      },
      {
        when: "Sources checked",
        label: "Grok Bot gathers the answer and keeps the source trail.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Product information", answer: "Relevant pages found" },
            { name: "Service information", answer: "Options summarized" },
            { name: "Specialist input", answer: "Open point marked" },
          ],
          status: "Sources ready",
        },
      },
      {
        when: "Reply ready",
        label: "A clear response is waiting for the seller.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Customer team",
          subject: "Product and service follow-up",
          status: "Ready for seller",
        },
        artifact: CATERPILLAR_ANSWER,
      },
    ],
    unlock:
      "A useful answer is ready without making the seller chase every source.",
    outcome:
      "A customer question becomes a sourced answer with the gaps clearly marked.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Product answers",
      subtitle: "Customer question and sourced reply",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "paper",
          name: "Answers",
          role: "bot",
          persona: "Finds product and service context and prepares the reply",
          color: "#FFCC00",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "paper",
          kind: "routine",
          body: "A product and service question arrived. I am checking Caterpillar sources and marking anything that needs a specialist.",
        },
        {
          id: "m2",
          from: "paper",
          kind: "text",
          body: "The source trail is ready. One point still needs specialist input, so I kept it out of the answer.",
        },
        {
          id: "m3",
          from: "paper",
          kind: "draft",
          draftLabel: "Questions and answer",
          artifact: CATERPILLAR_ANSWER,
        },
        {
          id: "m4",
          from: "paper",
          kind: "draft",
          draftLabel: "Customer reply",
          artifact: {
            kind: "gmail",
            title: "Reply to customer",
            to: CATERPILLAR_ANSWER.reply.to,
            subject: CATERPILLAR_ANSWER.reply.subject,
            body: CATERPILLAR_ANSWER.reply.body,
          },
        },
        {
          id: "m5",
          from: "paper",
          kind: "system",
          body: "The sourced reply is ready. Nothing has been sent.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Build account briefs from public project signals",
    trigger: "A target account enters the list",
    backgroundAction: "Researching public signals and preparing a brief",
    problem:
      "A list of accounts does not tell a seller why to start a conversation, what public evidence matters, or which questions are worth asking.",
    botJob:
      "Grok Bot checks public sources, separates facts from hypotheses, and prepares a brief with the original evidence and a first-message draft.",
    storyboard: [
      {
        when: "Account added",
        label: "Grok Bot starts from the public source.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Target account",
          sources: ["Project page", "Newsroom", "Hiring page"],
          signal: "Public project update",
        },
      },
      {
        when: "Evidence organized",
        label: "Facts, hypotheses, and open questions stay separate.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why Caterpillar", answer: "Possible fit to test" },
            { label: "Why now", answer: "Current project signal" },
            { label: "Why this team", answer: "Owner to confirm" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The seller gets a brief and a first message.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Operations contact to confirm",
          channels: ["Account brief", "Email", "LinkedIn"],
          status: "Drafts ready, nothing sent",
        },
      },
      {
        when: "Ready for the seller",
        label: "The final frame is the public project brief.",
        scene: "send",
        artifact: CATERPILLAR_OUTBOUND,
      },
    ],
    unlock:
      "Public evidence becomes a useful first conversation without pretending to know the buyer.",
    outcome:
      "One public project signal becomes a sourced account brief and first-message draft.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Account brief",
      subtitle: "Public research and first-message draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Research",
          role: "bot",
          persona: "Turns public project signals into sourced account briefs",
          color: "#FFCC00",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "attach",
          kind: "routine",
          body: "A target account entered the list. I am checking public project, company, and hiring sources.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "The original sources are saved. Facts are separate from the working hypotheses and open questions.",
        },
        {
          id: "m3",
          from: "attach",
          kind: "draft",
          draftLabel: "Public project brief",
          artifact: CATERPILLAR_OUTBOUND,
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "First message",
          artifact: {
            kind: "gmail",
            title: "First-message draft",
            to: "Operations contact to confirm",
            subject: "Public project context",
            body: "Hi,\n\nI saw the public project update and pulled together a short note on the equipment, service, and fleet questions that may be worth discussing. I would like to confirm whether this is relevant before making any assumptions.\n\nBest,",
          },
        },
        {
          id: "m5",
          from: "attach",
          kind: "system",
          body: "The account brief and first message are ready. Nothing has been sent.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
