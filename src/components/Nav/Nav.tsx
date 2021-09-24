import { Button, Fade, List, ListItem, Slide } from "@mui/material";
import { ListSX } from "./styles";
import { scroller } from "react-scroll";
import { Box } from "@mui/system";
const NAVS = [
  { label: "Menu", linkTo: "" },
  { label: "Locations", linkTo: "" },
  { label: "About", linkTo: "" },
];
const Nav = () => {
  const handleButtonClick = (elementName: string) => () => {
    scroller.scrollTo(elementName, {
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <List sx={ListSX}>
      {NAVS.map((nav, i) => (
        <ListItem key={`nav-${nav.label}-${i}`}>
          <Slide appear in timeout={500 + i * 100} direction="right">
            <Box width="100%">
              <Fade appear in timeout={2000}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleButtonClick(nav.label)}
                >
                  {nav.label}
                </Button>
              </Fade>
            </Box>
          </Slide>
        </ListItem>
      ))}
    </List>
  );
};
export default Nav;
