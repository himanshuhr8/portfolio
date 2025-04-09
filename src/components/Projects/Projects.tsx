import React from "react";
import Card from "@/components/Projects/Card";
import Heading from "@/components/Heading";
// Define project interface
import { prj1, prj2, prj3, prj4, prj5, prj11 } from "@/lib/utils";
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
          title="Music Room"
          description="A collaborative music queue web app where users can join rooms, add YouTube songs, vote on tracks, and enjoy a shared listening experience."
          imgLink="\prj11.jpg"
          liveLink="https://vol1-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/vol1"
          icons={prj11}
        />

        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          imgLink="\prj1.jpg"
          liveLink="https://hima31.vercel.app/"
          githubLink="https://www.github.com/himanshuhr8/portfolio"
          icons={prj1}
        />

        <Card
          title="Blogging Platform"
          description="A blogging platform inspired by Medium, featuring a seamless user experience, authentication, and robust backend."
          imgLink="\prj22.jpg"
          liveLink="https://medium-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/medium_clone"
          icons={prj2}
        />
        <Card
          title="Todo App"
          description="A feature-rich todo application with authentication, profile management, and seamless task handling."
          imgLink="\prj2.jpg"
          githubLink="https://github.com/himanshuhr8/todoApp"
          icons={prj3}
        />

        <Card
          title="GradePlus App"
          description="A dedicated app for IIITA students to access lecture notes, past papers and study materials."
          imgLink="\prj3.png"
          githubLink="https://github.com/himanshuhr8/GradePlus"
          icons={prj4}
        />

        <Card
          title="ParkEase App"
          description="A parking management app with real-time spot details, Google Maps integration, and Firebase-powered features."
          imgLink="\prj4.jpg"
          githubLink="https://github.com/himanshuhr8/ParkEasePlus"
          icons={prj5}
        />
      </div>
    </div>
  );
};

export default Projects;
