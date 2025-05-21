import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

type SocialLink = {
  name: string;
  url: string;
  icon: string;
  bgClasses: string;
};

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/lachlandev",
      icon: "akar-icons:github-fill",
      bgClasses: "bg-[#181717] hover:bg-[#333333]",
    },
    {
      name: "X",
      url: "https://x.com/lachlandev",
      icon: "akar-icons:x-fill",
      bgClasses: "bg-black hover:bg-gray-800",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/lachlandev",
      icon: "akar-icons:instagram-fill",
      bgClasses: "bg-[#E1306C] hover:bg-[#C13584]",
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/TkZzRBaxP9",
      icon: "akar-icons:discord-fill",
      bgClasses: "bg-[#5865F2] hover:bg-[#4752C4]",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          as="a"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.bgClasses} text-white justify-start`}
          variant="flat"
          fullWidth
          startContent={
            <Icon
              icon={link.icon}
              className="w-5 h-5 text-white mr-3"
            />
          }
        >
          {link.name}
        </Button>
      ))}
    </div>
  );
};