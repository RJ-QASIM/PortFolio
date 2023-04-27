import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function SocialIcons({ Color }) {
  return (
    <div>
      <div
        className={`text-[${Color.primary}] mt-[268px] w-[200px]  flex justify-around`}
      >
        <LinkedInIcon className="w-10 h-10" />
        <GitHubIcon className="w-10 h-10" />
        <FacebookIcon className="w-10 h-10" />
      </div>
    </div>
  );
}
