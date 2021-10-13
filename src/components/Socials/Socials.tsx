import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton, Link } from "@mui/material";
const ICONS = [
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/thebullpubgrill/",
  },
  { icon: FacebookIcon, link: "https://www.facebook.com/thebullpubgrill" },
  { icon: TwitterIcon, link: "https://twitter.com/TheBullPubGrill" },
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
        justifyContent: "center",
      }}
    >
      {ICONS.map(({ icon: IconComponent, link }) => (
        <Link key={link} href={link} target="_blank" sx={{ mx: 2 }}>
          <IconButton
            sx={{
              fontSize: "2.5rem",
              color: "background.default",
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
                opacity: "0.7",
              },
            }}
          >
            <IconComponent fontSize="inherit" />
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};

export default Socials;
