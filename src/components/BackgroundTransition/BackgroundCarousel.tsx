import { Box } from "@mui/material";
import { FC, useState, useEffect } from "react";
import bgVibe from "assets/img/bg-vibe.jpg";
import bgVibe2 from "assets/img/bg-vibe2.jpg";
import bgBeer from "assets/img/bg-beer.jpg";
import bgBeer2 from "assets/img/bg-beer2.jpg";
import bgBeer3 from "assets/img/bg-beer3.jpg";
import { keyframes } from "@mui/styled-engine";

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    to{
        opacity: 0;
    }
`;
const BACKGROUNDS = [bgVibe, bgVibe2, bgBeer, bgBeer2, bgBeer3];
const BackgroundCarousel: FC = () => {
  const [currentBgIdx, setCurrentBgIdx] = useState(0);

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setCurrentBgIdx((prevIdx) => {
        if (prevIdx + 1 < BACKGROUNDS.length) return prevIdx + 1;
        else return 0;
      });
    }, 1000 * 10);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {BACKGROUNDS.map((bg, i) => (
        <Box
          key={`bg-carousel-${i}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "background.paper",
            backgroundBlendMode: "soft-light",
            backgroundAttachment: "fixed",
            animation: `${
              currentBgIdx === i ? fadeIn : fadeOut
            } 5s linear forwards`,
          }}
        />
      ))}
    </Box>
  );
};
export default BackgroundCarousel;
