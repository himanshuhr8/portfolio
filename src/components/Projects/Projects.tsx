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
          description="ertrst"
          imgLink="\prj1.jpg"
          githubLink="https://www.github.com/himanshuhr8"
          icons={prj1}
        />
        <Card
          title="Todo App"
          description="ertrst"
          imgLink="\prj1.jpg"
          githubLink="https://github.com/himanshuhr8/todoApp"
          icons={prj2}
        />
        <Card
          title="GradePlus App"
          description="ertrst"
          imgLink="\prj1.jpg"
          githubLink="https://github.com/himanshuhr8/GradePlus"
          icons={prj3}
        />
        <Card
          title="ParkEase App"
          description="ertrst"
          imgLink="\prj1.jpg"
          githubLink="https://www.github.com/himanshuhr8"
          icons={prj4}
        />
      </div>
    </div>
  );
};

export default Projects;
