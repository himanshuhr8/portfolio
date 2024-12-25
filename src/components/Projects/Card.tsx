"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

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
    <CardContainer className="max-w-full overflow-x-auto">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[90%] sm:max-w-[30rem] 
          md:max-w-[22rem] lg:max-w-[30rem] h-auto rounded-xl p-4 sm:p-6 border"
      >
        <CardItem
          translateZ="50"
          className="text-base sm:text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imgLink}
            alt="thumbnail"
            className="h-32 sm:h-40 md:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <CardItem className="flex flex-wrap gap-2 mt-4">
          {icons.iconLink.map((icon: string, index: number) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            >
              <img
                src={icon}
                alt={`icon-${index}`}
                className="p-2 w-full h-full object-contain"
              />
            </div>
          ))}
        </CardItem>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-2">
          {liveLink && (
            <CardItem
              translateZ={20}
              as={Link}
              to={liveLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-center"
            >
              Live Link →
            </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            to={githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-center"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
