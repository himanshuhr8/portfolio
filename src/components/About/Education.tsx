import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "../ui/wobble-card";
import Heading from "@/components/Heading";
export default function TimelineDemo() {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>B.Tech in Information Technology</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>Institute:</strong> Indian Institute of Information
              Technology, Allahabad (IIIT A)
            </h3>
            <p className="mt-2 text-left text-lg md:text-xl font-semibold text-white">
              <strong>CGPA:</strong> 7.81 (till 6th semester)
            </p>

            <h4 className="mt-4 text-left text-xl font-semibold text-white">
              Responsibilities:
            </h4>
            <ul className="list-inside list-disc text-lg md:text-xl text-white">
              <li>
                <strong>Coordinator of App-Dev Wing, GDG IIITA:</strong> Leading
                and coordinating app development initiatives.
              </li>
              <li>
                <strong>Head of the Club of Professionals:</strong> Working on
                government and college tech projects.
              </li>

              <li>
                <strong>Volunteer at Prayaas Society:</strong> Actively
                contributing to community-driven initiatives.
              </li>
            </ul>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2021",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 12th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> Sunshine Public School
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> CBSE
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 87.8%
            </p>
          </div>
        </WobbleCard>
      ),
    },
    {
      title: "2019",
      content: (
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-12">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              <strong>Class 10th</strong>
            </h2>
            <h3 className="mt-2 text-left text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <strong>School:</strong> Saint Joseph’s School
            </h3>

            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Board:</strong> ICSE
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-white">
              <strong>Percentage:</strong> 92.4%
            </p>
          </div>
        </WobbleCard>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <div className="mb-0">
        <Heading title="Education" />
      </div>
      <div className="mt-0">
        <Timeline data={data} />
      </div>
    </div>
  );
}
