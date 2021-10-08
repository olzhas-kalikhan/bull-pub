import React, { cloneElement } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton, Link } from "@mui/material";
const ICONS = [
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/thebullpubgrill/",
  },
  { icon: <FacebookIcon />, link: "https://www.facebook.com/thebullpubgrill" },
  { icon: <TwitterIcon />, link: "https://twitter.com/TheBullPubGrill" },
];
const Socials = () => {
  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        mx: "auto",
        display: "flex",
        width: "50%",
        justifyContent: "space-around",
      }}
    >
      {ICONS.map(({ icon, link }) => (
        <Link key={link} href={link} target="_blank">
          <IconButton sx={{ fontSize: "3.6rem" }}>
            {cloneElement(icon, { fontSize: "inherit" })}
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};

export default Socials;
