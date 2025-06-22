import { PinContainer } from "../ui/3d-pin";

interface CodingCardProps {
  title: string;
  link: string;
  platform: string;
  logo?: string;
  descriptionPoints?: string[];
}

export default function CodingCard({
  title,
  link,
  platform,
  logo,
  descriptionPoints = [],
}: CodingCardProps) {
  return (
    <div className="h-[25rem]  flex items-center justify-center">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/70 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs mb-4 font-extrabold text-xl tracking-wide uppercase text-slate-100">
            {platform}
          </h3>

          <div className="flex flex-1 w-full items-center justify-center rounded-lg mt-2 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <div className="display flex-col">
              <ul className="text-base text-slate-300 list-disc list-inside space-y-2 leading-relaxed">
                {descriptionPoints.map((point, idx) => (
                  <li key={idx} className="font-medium">
                    {point}
                  </li>
                ))}
              </ul>
              {logo && (
                <div className="flex justify-center mt-1">
                  <img
                    src={logo}
                    alt={`${platform} logo`}
                    className=" w-40 h-20 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
