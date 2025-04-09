import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const typescript = "/typescript.svg";
const javascript = "/javascript.svg";
const reactjs = "/reactjs.svg";
const flutter = "/flutter.svg";
const tailwindcss = "/tailwindcss.svg";
const firebase = "/firebase.svg";
const postgresql = "/postgres.svg";
const prisma = "/prisma.svg";
// const mongodb = "/mongodb.svg";
const vercel = "/vercel.svg";
const hono = "/hono.svg";
const nextjs = "/nextdotjs.svg";
const cloudflare = "/cloudflare.svg";

const android = "/android.svg";
const express = "/express.svg";
const dart = "/dart.svg";

export const prj1 = {
  iconLink: [typescript, javascript, reactjs, tailwindcss, vercel],
};
export const prj11 = {
  iconLink: [
    nextjs,
    typescript,
    javascript,
    tailwindcss,
    postgresql,
    prisma,
    vercel,
  ],
};
export const prj2 = {
  iconLink: [
    reactjs,
    typescript,
    javascript,
    tailwindcss,
    postgresql,
    prisma,
    hono,
    cloudflare,
    vercel,
  ],
};
export const prj3 = {
  iconLink: [
    typescript,
    javascript,
    reactjs,
    tailwindcss,
    express,
    postgresql,
    prisma,
  ],
};
export const prj4 = { iconLink: [flutter, firebase, dart, android] };
export const prj5 = { iconLink: [flutter, firebase, dart, android] };
