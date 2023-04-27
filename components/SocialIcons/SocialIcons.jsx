import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function SocialIcons({ Color }) {
  return (
    <div>
      <div
        className={`mt-[268px] w-[200px]  flex justify-around`}
        style={{ color: Color.primary }}
      >
        <LinkedInIcon style={{ width: "40px", height: "40px" }} />
        <GitHubIcon style={{ width: "40px", height: "40px" }} />
        <FacebookIcon style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );
}
