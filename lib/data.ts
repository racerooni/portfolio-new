import portfolio from "@/public/portfolio.png";
import ecommerce from "@/public/ecommerce.png";
import mtaguessthesong from "@/public/mtaguessthesong.png";
export const links = [
  {
    name: "Kezdőlap",
    url: "#home",
  },
  {
    name: "Rólam",
    url: "#about",
  },
  {
    name: "Képességeim",
    url: "#skills",
  },
  {
    name: "Projektek",
    url: "#projects",
  },
  {
    name: "Kapcsolat",
    url: "#contact",
  },
] as const;


export const projektjeim = [
  {
    nev: "E-commerce web app",
    leiras:
      "Felhasználók a már nem használt dolgaikat el tudják adni. (WIP)",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "MySQL", "ShadCN UI", "Clerk"],
    imageUrl: ecommerce,
    repo: "https://github.com/racerooni/grabkeys"
  },
  {
    nev: "MTA - Guess the map",
    leiras:
      "Játékban lévő pályák kitalálása a hozzájuk fűződő zene alapján.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ShadCN UI"],
    imageUrl: mtaguessthesong,
    repo: "https://github.com/racerooni/mta-guess-the-map"
  },
  {
    nev: "Portfólió",
    leiras:
      "Jelenlegi portfólió weboldal.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: portfolio,
    repo: "https://github.com"
  },
] as const;

export const kepessegek = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MySQL",
  "Framer Motion",
  "C#",
  "Python",
  "PHP",
] as const;