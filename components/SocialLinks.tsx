import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/hamza-developer12",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "www.linkedin.com/in/hamza-azam-24097b204",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "https://www.facebook.com/aurangzeb.aurangzeb.3139",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <div
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full
                hover:bg-lightSky/10 hover:border-lightSky hoverEffect "
              >
                <Link href={item.href} target="_blank">
                  <span>{item.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-hoverColor text-black font-semibold">
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
