import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export type IconProps = { className?: string; "aria-hidden"?: boolean };
