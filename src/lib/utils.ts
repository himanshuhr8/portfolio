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

const android = "/android.svg";
const express = "/express.svg";
const dart = "/dart.svg";

export const prj1 = {
  iconLink: [typescript, javascript, reactjs, tailwindcss],
};
export const prj2 = {
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
export const prj3 = { iconLink: [flutter, firebase, dart, android] };
export const prj4 = { iconLink: [flutter, firebase, dart, android] };
