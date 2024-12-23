"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card"; // Assuming these components are custom and will work
import { Link } from "react-router-dom"; // If you're using React Router for navigation

interface CardProps {
  title: string;
  description: string;
  imgLink: string;
  liveLink?: string;
  githubLink: string;
  icons: { iconLink: string[] };
}

export function Card({
  title,
  description,
  imgLink,
  liveLink,
  githubLink,
  icons,
}: CardProps) {
  return (
    <CardContainer className="inter-var max-w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imgLink}
            alt="thumbnail"
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem className="flex flex-row gap-3 mt-4">
          {icons.iconLink.map((icon: string, index: number) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img
                src={icon}
                alt="icon5"
                className="p-2"
                width={100}
                height={100}
              />
            </div>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-12">
          {liveLink && (
            <CardItem
              translateZ={20}
              as={Link}
              to={liveLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Live Link →
            </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            to={githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default Card;
