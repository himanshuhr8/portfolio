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
const python = "/python.svg";
const android = "/android.svg";
const express = "/express.svg";
const dart = "/dart.svg";
const streamlit = "/streamlit.svg";
const googlegemini = "/googlegemini.svg";
const supabase = "/supabase.svg";
const shadcn = "/shadcnui.svg";

export const drive_link =
  "https://drive.google.com/file/d/1DE3kOBYf2fuHW5sthCJD89Ld6bwV-Gfd/view?usp=sharing";

export const musicRoomIcons = {
  iconLink: [nextjs, typescript, tailwindcss, postgresql, prisma, vercel],
};

export const noteGeniusIcons = {
  iconLink: [nextjs, typescript, supabase, tailwindcss, shadcn, vercel],
};
export const portfolioIcons = {
  iconLink: [typescript, javascript, reactjs, tailwindcss, vercel],
};

export const agentMedicalIcons = {
  iconLink: [python, googlegemini, streamlit],
};

export const blogIcons = {
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
export const todoIcons = {
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
export const gradeplusIcons = { iconLink: [flutter, firebase, dart, android] };
export const parkeaseIcons = { iconLink: [flutter, firebase, dart, android] };
