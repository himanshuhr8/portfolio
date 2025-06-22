import Aboutcard from "./AboutCard";
import Heading from "@/components/Heading";
import Circle from "@/components/About/TechCircle";
import Education from "@/components/About/Education";

const About = (): JSX.Element => {
  return (
    <div id="about" className="container mx-auto px-6 py-12 mt-7">
      {/* Heading Section */}
      <div className="w-full text-center mb-8">
        <Heading title="About Me" />
      </div>

      {/* First Row: AboutCard and Circle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        {/* AboutCard */}
        <div className="flex justify-center">
          <Aboutcard />
        </div>

        {/* Circle */}
        <div className="flex justify-center items-center">
          <Circle />
        </div>
      </div>

      {/* Second Row: Education Section */}
      <div id="education" className="mt-14">
        <Education />
      </div>
    </div>
  );
};

export default About;
