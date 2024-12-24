import React from "react";
import Card from "@/components/Projects/Card";
import Heading from "@/components/Heading";
// Define project interface
import { prj1, prj2, prj3, prj4 } from "@/lib/utils";
const Projects: React.FC = (): JSX.Element => {
  return (
    <div id="projects" className=" mt-7">
      <div className="mt-12 ">
        <Heading title="My Projects" />
      </div>
      <div
        className="flex flex-wrap w-full justify-center gap-x-[10rem]
      relative"
      >
        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          imgLink="\prj1.jpg"
          liveLink="https://hima31.vercel.app/"
          githubLink="https://www.github.com/himanshuhr8/portfolio"
          icons={prj1}
        />

        <Card
          title="Todo App"
          description="A feature-rich todo application with authentication, profile management, and seamless task handling."
          imgLink="\prj2.jpg"
          githubLink="https://github.com/himanshuhr8/todoApp"
          icons={prj2}
        />

        <Card
          title="GradePlus App"
          description="A dedicated app for IIITA students to access lecture notes, past papers and study materials."
          imgLink="\prj3.png"
          githubLink="https://github.com/himanshuhr8/GradePlus"
          icons={prj3}
        />

        <Card
          title="ParkEase App"
          description="A parking management app with real-time spot details, Google Maps integration, and Firebase-powered features."
          imgLink="\prj4.jpg"
          githubLink="https://github.com/himanshuhr8/ParkEasePlus"
          icons={prj4}
        />
      </div>
    </div>
  );
};

export default Projects;
