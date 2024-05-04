"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "~/components/ui/badge";

export const LayoutNavigation = () => {
  const path = usePathname();

  const generateClassName = (href: string) => {
    return clsx("hover:underline", {
      "text-zinc-400": path !== href,
      "text-white": path === href,
      "font-semibold": path === href,
    });
  };

  return (
    <>
      <Link href="/tts" className={generateClassName("/tts")}>
        Text to Speach
      </Link>
      <div className="flex cursor-not-allowed gap-2 text-zinc-400">
        Speach to Text
        <Badge>Soon</Badge>
      </div>
      <div className="flex cursor-not-allowed gap-2 text-zinc-400">
        Text to Image
        <Badge>Soon</Badge>
      </div>
    </>
  );
};