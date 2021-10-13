import { Box } from "@mui/material";
import React, { FC } from "react";
import { Category } from "types/menu";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
type MenuDisplayProps = {
  categories: Category[];
};
const MenuDisplay: FC<MenuDisplayProps> = ({ categories }) => {
  return (
    <Box>
      <Desktop categories={categories} />
      <Mobile categories={categories} />
    </Box>
  );
};

export default MenuDisplay;
