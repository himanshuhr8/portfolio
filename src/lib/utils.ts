import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const typescript = "src/assets/typescript.svg";
const javascript = "src/assets/javascript.svg";
const reactjs = "src/assets/reactjs.svg";
const flutter = "src/assets/flutter.svg";
const tailwindcss = "src/assets/tailwindcss.svg";
const firebase = "src/assets/firebase.svg";
const postgresql = "src/assets/postgres.svg";
const prisma = "src/assets/prisma.svg";
// const mongodb = "src/assets/mongodb.svg";

const android = "src/assets/android.svg";
const express = "src/assets/express.svg";
const dart = "src/assets/dart.svg";

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
