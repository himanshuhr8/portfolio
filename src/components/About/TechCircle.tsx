import OrbitingCircles from "@/components/ui/orbiting-circles";
import { BorderBeam } from "@/components/ui/border-beam.tsx";
import Icons from "@/lib/Icons";
export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <BorderBeam />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Stack
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={15}
        delay={5}
        radius={80}
      >
        <Icons.javascript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={15}
        delay={15}
        radius={80}
      >
        <Icons.tailwindcss />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={15}
        delay={10}
        radius={80}
      >
        <Icons.prisma />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={6}
        reverse
      >
        <Icons.typescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        delay={12}
        duration={30}
        reverse
      >
        <Icons.reactjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={18}
        reverse
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={24}
        reverse
      >
        <Icons.postgresql />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={30}
        reverse
      >
        <Icons.flutter />
      </OrbitingCircles>
    </div>
  );
}
