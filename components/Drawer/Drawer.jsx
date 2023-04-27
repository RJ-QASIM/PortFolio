import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LightModeIcon from "@mui/icons-material/LightMode";
import CallIcon from "@mui/icons-material/Call";
import CancelIcon from "@mui/icons-material/Cancel";
export default function TemporaryDrawer({ ColorHandel, Color }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-black text-[#1799F0] h-screen"
    >
      <div className="flex justify-end p-4">
        <CancelIcon />
      </div>
      <List className="border-[4px] m-10 rounded-full border-[#1799F0]">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon className=" text-[#1799F0] " />
            </ListItemIcon>
            Home
          </ListItemButton>
        </ListItem>
      </List>
      <List className="border-[4px] m-10 rounded-full border-[#1799F0]">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon className=" text-[#1799F0] " />
            </ListItemIcon>
            About
          </ListItemButton>
        </ListItem>
      </List>
      <List className="border-[4px] m-10 rounded-full border-[#1799F0]">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContentPasteIcon className=" text-[#1799F0] " />
            </ListItemIcon>
            Resume
          </ListItemButton>
        </ListItem>
      </List>
      <List
        className="border-[4px] m-10 rounded-full border-[#1799F0] "
        onClick={ColorHandel}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LightModeIcon className=" text-[#1799F0] " />
            </ListItemIcon>
            Light
          </ListItemButton>
        </ListItem>
      </List>

      <List className="border-[4px] m-10 rounded-full border-[#1799F0]">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon className=" text-[#1799F0] " />
            </ListItemIcon>
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className={`text-[${Color.tertiary}]`} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
