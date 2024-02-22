import { Public_links } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <Link
              target="_blank"
              href={Public_links.github}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
            <Link
              target="_blank"
              href={Public_links.discord}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <Link
              target="_blank"
              href={Public_links.twitter}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </Link>
            <Link
              target="_blank"
              href={Public_links.linkedIn}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Email</div>

            <Link
              href="mailto:waqaskhan5570@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                waqaskhan5570@gmail.com
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
