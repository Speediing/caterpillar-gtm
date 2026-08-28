import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every Caterpillar seller",
    blurb: "The human stays in control. Their agents keep the surrounding work moving.",
    color: "#E8E8ED",
    mark: "AE",
    seat: true,
  },
  {
    id: "inbox",
    name: "Product answers",
    blurb: "Watches for customer questions and prepares sourced answers.",
    jobId: "legal-redlines",
    color: "#FF375F",
  },
  {
    id: "cross-sell",
    name: "Account signals",
    blurb: "Watches public project signals and prepares account briefs.",
    jobId: "attach-engine",
    color: "#FF9500",
  },
];
