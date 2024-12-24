import IconCloud from "@/components/ui/icon-cloud";
import Type from "./Type";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "cplusplus",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  // "nextdotjs",
  "prisma",
  "amazonaws",
  "tailwindcss",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "postman",
  "linux",
  "npm",
  "mongodb",
  "kotlin",
  // "testinglibrary",
  // "jest",
  // "cypress",
  // "docker",
  "git",
  // "jira",
  "github",
  // "gitlab",
  "visualstudiocode",
  "androidstudio",
  // "sonarqube",
  // "figma",
];
const Home = (): JSX.Element => {
  return (
    <section className=" flex   mt-6">
      <div className="mt-8  container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* First Column (Text in Three Rows) */}
        <div className="  lg:w-1/2 flex flex-col space-y-6 text-left mb-8 lg:mb-0 mt-20 sm:mt-24 md:mt-32">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              Hi There!{" "}
              <span className="wave inline-block animate-wave">👋🏻</span>
            </h1>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              I'M <strong className="text-purple-400">HIMANSHU RAJ</strong>
            </h1>
          </div>
          <div className="text-white text-lg">
            <Type />
          </div>
        </div>
        {/* Second Column (Icon Cloud) */}
        <div className=" mt-4 lg:w-1/2 flex flex-col items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Home;
