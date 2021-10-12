import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
type SectionTitleProps = {
  title: string;
  bgImage: string;
};
const SectionTitle: FC<SectionTitleProps> = ({ bgImage, title }) => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        py: "5rem",
        m: "0 calc(-50vw + 50%)",
        mt: 8,
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "background.paper",
        backgroundBlendMode: "soft-light",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
