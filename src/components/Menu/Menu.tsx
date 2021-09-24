import React, { useState } from "react";
import Screen from "components/Screen";
import { SelectChangeEvent, Typography } from "@mui/material";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Menu = () => {
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
