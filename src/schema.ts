import { z } from "zod";

export type Link = z.infer<typeof Link>;
export const Link = z.object({
  name: z.string(),
  url: z.string(),
});

export type Date = z.infer<typeof Date>;
export const Date = z.union([
  z.string(),
  z.object({
    start: z.string(),
    end: z.string().optional(),
  }),
]);

export type Basic = z.infer<typeof Basic>;
export const Basic = z.object({
  name: z.string(),
  aka: z.string(),
  birthday: z.string(),
  interested: z.array(z.string()),
  bio: z.string(),
});

export type History = z.infer<typeof History>;
export const History = z.object({
  date: Date,
  title: z.string(),
  attribute: z.string().optional(),
  description: z.string().optional(),
});

export type Event = z.infer<typeof Event>;
export const Event = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string().optional(),
  techs: z.array(z.string()).optional(),
  links: z.array(Link).optional(),
});

export type Works = z.infer<typeof Works>;
export const Works = z.object({
  title: z.string(),
  description: z.string(),
  techs: z.array(z.string()).optional(),
  links: z.array(Link).optional(),
});

export type Skill = z.infer<typeof Skill>;
export const Skill = z.object({
  name: z.string(),
  level: z.number(),
});

export type Resume = z.infer<typeof Resume>;
export const Resume = z.object({
  basic: Basic,
  history: z.array(History),
  events: z.array(Event),
  works: z.array(Works),
  skills: z.array(Skill),
  links: z.array(Link),
});
