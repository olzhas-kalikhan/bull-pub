import { AppBar, Tab, Tabs, Box, Button, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { scroller } from "react-scroll";

import { NAVS } from "constants/navs.constants";

const NavBar: FC = () => {
  const [currentTab, setCurrentTab] = useState(NAVS[0].containerId);
  const [scrollPos, setScrollPos] = useState(0);
  const [isHomeScreen, setIsHomeScreen] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };
  const handleTabChange = (event: React.SyntheticEvent, value: any) => {
    scroller.scrollTo(value, {
      smooth: true,
      offset: 1,
    });
    setCurrentTab(value);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentTab((prevTab) => scrolledDiv(scrollPos) || prevTab);
    setIsHomeScreen(NAVS[0].containerId === currentTab);
  }, [scrollPos, currentTab]);
  return (
    <AppBar
      color={isHomeScreen ? "transparent" : "default"}
      sx={{
        boxShadow: isHomeScreen ? "none" : "",
        transition: "background-color 0.3s",
      }}
    >
      <Box
        sx={{
          height: "80%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ textShadow: "0em 0.1em 0.5em #000" }}>
          <Typography variant="h5">
            The <span style={{ color: "#BF1E2F" }}>BULL</span>
          </Typography>
          <Typography variant="h6">Pub & Grill </Typography>
        </Box>

        <Box sx={{ width: "50%" }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            sx={{ height: "100%", alignItems: "center" }}
          >
            {NAVS.map(({ label, containerId }, i) => (
              <Tab
                key={`tab-${containerId}`}
                value={containerId}
                label={label}
                disableRipple
              />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ my: "auto" }}>
          <Button color="primary" variant="contained">
            Call Us Now
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};
export default NavBar;

const scrolledDiv = (scrollPos: number) => {
  const currentDiv = NAVS.find(({ containerId }) => {
    let elBounds = scroller.get(containerId)!.getBoundingClientRect();
    let top = elBounds.top + document.documentElement.scrollTop,
      bottom = elBounds.bottom + document.documentElement.scrollTop;

    return scrollPos >= top && scrollPos < bottom;
  });

  return currentDiv?.containerId;
};

// import { useRef } from 'react'

// function Component() {
//   const inputRef = useRef()

//   return (
//     <input ref={inputRef} />
//     <div
//       onScroll={() => {
//         const { offsetTop } = inputRef.current
//         ...
//       }}
//     >
//   )
// }
