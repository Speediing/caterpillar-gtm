import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const web = {
  id: "web",
  host: "public-project.example",
  label: "Public source",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening the customer call",
      host: "granola.app",
      path: "/notes/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "Organizing needs and open questions",
      host: "granola.app",
      path: "/notes/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Updating the customer brief",
      host: "figma.com",
      path: "/file/customer-brief",
      title: "Customer brief",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Preparing the one-page follow-up",
      host: "figma.com",
      path: "/file/customer-follow-up",
      title: "Customer follow-up",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Brief ready, nothing sent",
      host: "figma.com",
      path: "/file/customer-follow-up",
      title: "Customer follow-up",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening the customer question",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking Caterpillar sources",
      host: "docs.google.com",
      path: "/document/d/product-service-sources",
      title: "Product and service sources",
      site: "clip",
      clip: "01-morning-inbox",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Preparing the sourced answer",
      host: "docs.google.com",
      path: "/document/d/customer-answer",
      title: "Customer answer",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting the reply, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Sourced reply ready",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Opening the public project source",
      host: "public-project.example",
      path: "/project-update",
      title: "Public project update",
      site: "research",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m2: {
      pill: "Separating facts from hypotheses",
      host: "public-project.example",
      path: "/project-update",
      title: "Public project update",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m3: {
      pill: "Writing the public project brief",
      host: "docs.google.com",
      path: "/document/d/public-project-brief",
      title: "Public project brief",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m4: {
      pill: "Drafting the first message",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m5: {
      pill: "Brief and message ready",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
