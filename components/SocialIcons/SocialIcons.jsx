import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { socialsData } from "@/data/SocialData";
export default function SocialIcons({ Color }) {
  return (
    <div>
      <div
        className={`mt-[268px] w-[200px]  flex justify-around`}
        style={{ color: Color.primary }}
      >
        <a href={socialsData.linkedIn} target="_blank">
          <LinkedInIcon style={{ width: "40px", height: "40px" }} />
        </a>
        <a href={socialsData.github} target="_blank">
          <GitHubIcon style={{ width: "40px", height: "40px" }} />
        </a>
        <a href={socialsData.facebook} target="_blank">
          <FacebookIcon style={{ width: "40px", height: "40px" }} />
        </a>
      </div>
    </div>
  );
}
