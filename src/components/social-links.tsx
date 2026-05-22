import type { ComponentType } from "react";
import type { IconProps } from "../lib/types";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import social from "../contents/social.json";

interface Link {
  label: string;
  href: string;
  Icon: ComponentType<IconProps>;
}

const links: Link[] = [
  {
    label: "GitHub",
    href: social.github,
    Icon: FaGithub,
  },
  {
    label: "X",
    href: social.x,
    Icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "Mail",
    href: social.mail,
    Icon: FaEnvelope,
  },
];

export function SocialLinks() {
  return (
    <nav className="mt-4 flex items-center gap-4" aria-label="Social links">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          className="text-muted-foreground transition-colors hover:text-foreground"
          href={href}
          aria-label={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        >
          <Icon className="size-4" aria-hidden={true} />
        </a>
      ))}
    </nav>
  );
}
