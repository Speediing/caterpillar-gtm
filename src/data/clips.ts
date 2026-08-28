import type { Clip, ClipId } from "./types";

function clip(
  id: ClipId,
  title: string,
  caption: string,
): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Customer question",
    "A new question starts a search across product and service sources.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Public project research",
    "Public evidence becomes an account brief and a first-message draft.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Brief from the room",
    "Granola is in. The customer brief updates while the call is still live.",
  ),
  "04-engineer-bugbot": clip(
    "04-engineer-bugbot",
    "Engineer",
    "Wired to the repo. Answers a setup question without leaving the thread.",
  ),
  "05-forecast-sfdc": clip(
    "05-forecast-sfdc",
    "Forecast",
    "Demo notes in. Next steps in the format her manager wants.",
  ),
  "06-customer-expert": clip(
    "06-customer-expert",
    "Customer expert",
    "Who is in the account, what they use, questions in Slack.",
  ),
  "07-customer-exec-brief": clip(
    "07-customer-exec-brief",
    "Exec brief",
    "Turns what it just watched her do into a short note for her boss.",
  ),
  "08-chief-groupchat": clip(
    "08-chief-groupchat",
    "Chief group chat",
    "Opens a group channel. Chief of Staff, Slides, Engineer. Splits the work.",
  ),
};

export const ALL_CLIPS: Clip[] = Object.values(CLIPS);
