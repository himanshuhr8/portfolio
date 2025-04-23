import React from "react";
import Card from "@/components/Projects/Card";
import Heading from "@/components/Heading";
// Define project interface
import {
  portfolioIcons,
  blogIcons,
  todoIcons,
  gradeplusIcons,
  parkeaseIcons,
  musicRoomIcons,
  agentMedicalIcons,
  noteGeniusIcons,
} from "@/lib/utils";
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
          imgLink="\musicRoom.jpg"
          liveLink="https://vol1-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/vol1"
          icons={musicRoomIcons}
        />
        <Card
          title="Note Genius"
          description="An advanced note-taking app with AI-powered summarization. Built with Supabase and React, it lets users securely create, manage, and auto-summarize notes for quick reference."
          imgLink="\noteGenius.jpg"
          liveLink="https://notegenius-hima31.vercel.app"
          githubLink="https://github.com/himanshuhr8/NoteGenius"
          icons={noteGeniusIcons}
        />

        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          imgLink="\portfolio.jpg"
          liveLink="https://hima31.vercel.app/"
          githubLink="https://www.github.com/himanshuhr8/portfolio"
          icons={portfolioIcons}
        />
        <Card
          title="Agentic Medical AI"
          description="A multi-agent reasoning system for simulating OSCE-style medical diagnosis, with interactive doctor-patient conversations and diagnostic insights."
          imgLink="\agenticMedical.jpg"
          liveLink="https://agenticmedicalai.streamlit.app/"
          githubLink="https://github.com/himanshuhr8/AgenticMedicalAi"
          icons={agentMedicalIcons}
        />

        <Card
          title="Blogging Platform"
          description="A blogging platform inspired by Medium, featuring a seamless user experience, authentication, and robust backend."
          imgLink="\blog.jpg"
          liveLink="https://medium-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/medium_clone"
          icons={blogIcons}
        />
        <Card
          title="Todo App"
          description="A feature-rich todo application with authentication, profile management, and seamless task handling."
          imgLink="\todo.jpg"
          githubLink="https://github.com/himanshuhr8/todoApp"
          icons={todoIcons}
        />

        <Card
          title="GradePlus App"
          description="A dedicated app for IIITA students to access lecture notes, past papers and study materials."
          imgLink="\gradeplus.png"
          githubLink="https://github.com/himanshuhr8/GradePlus"
          icons={gradeplusIcons}
        />

        <Card
          title="ParkEase App"
          description="A parking management app with real-time spot details, Google Maps integration, and Firebase-powered features."
          imgLink="\parkease.jpg"
          githubLink="https://github.com/himanshuhr8/ParkEasePlus"
          icons={parkeaseIcons}
        />
      </div>
    </div>
  );
};

export default Projects;
