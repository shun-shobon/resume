import { z } from "zod";

export const Link = z.object({
  name: z.string(),
  url: z.string(),
});

export const Date = z.union([
  z.string(),
  z.object({
    start: z.string(),
    end: z.string().optional(),
  }),
]);

export const Basic = z.object({
  name: z.string(),
  aka: z.string(),
  birthday: z.string(),
  interested: z.array(z.string()),
});

export const History = z.object({
  date: Date,
  title: z.string(),
  attribute: z.string().optional(),
  description: z.string().optional(),
});

export const Event = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string().optional(),
  techs: z.array(z.string()).optional(),
  links: z.array(Link).optional(),
});

export const Works = z.object({
  title: z.string(),
  description: z.string(),
  techs: z.array(z.string()).optional(),
  links: z.array(Link).optional(),
});

export const Skill = z.object({
  name: z.string(),
  level: z.number(),
});

export const Resume = z.object({
  basic: Basic,
  history: z.array(History),
  events: z.array(Event),
  works: z.array(Works),
  skills: z.array(Skill),
  links: z.array(Link),
});
