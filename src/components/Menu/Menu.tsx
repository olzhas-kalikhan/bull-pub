import Screen from "components/Screen";
import { FC } from "react";
import { Typography } from "@mui/material";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Menu: FC = () => {
  return (
    <Screen>
      <Typography variant="h2" align="center" mt={3}>
        Menu
      </Typography>
      <MobileMenu />
      <DesktopMenu />
    </Screen>
  );
};
export default Menu;
