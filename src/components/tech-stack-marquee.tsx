import type { ComponentType } from "react";
import type { IconProps } from "../lib/types";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGo,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import techStack from "../contents/tech-stack.json";

interface TechStackItem {
  name: string;
  icon: string;
}

const icons: Record<string, ComponentType<IconProps> | undefined> = {
  aws: FaAws,
  go: SiGo,
  docker: SiDocker,
  mongodb: SiMongodb,
  nestjs: SiNestjs,
  nextjs: SiNextdotjs,
  node: SiNodedotjs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: SiReact,
  redis: SiRedis,
  tanstack: SiReactquery,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
};

export function TechStackMarquee() {
  const items: TechStackItem[] = [...techStack, ...techStack];

  return (
    <div
      className="mt-8 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Tech stack"
    >
      <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
        {items.map(({ name, icon }, index) => {
          const Icon = icons[icon];

          return (
            <div
              key={`${name}-${index}`}
              className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted-foreground"
            >
              {Icon ? <Icon className="size-3" aria-hidden={true} /> : null}
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
