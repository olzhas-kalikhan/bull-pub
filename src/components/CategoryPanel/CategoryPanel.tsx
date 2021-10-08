import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { Category } from "constants/menu.constants";
import MenuItem from "components/MenuItem";
import DrinkItem from "components/DrinkItem/DrinkItem";
type CategoryPanelProps = {
  category: Category;
  currentIdx: number;
  idx: number;
};
const CategoryPanel: FC<CategoryPanelProps> = ({
  category,
  currentIdx,
  idx,
}) => {
  return (
    <Box hidden={currentIdx !== idx}>
      <Grid columnSpacing={10} container>
        {category.items?.map((item, i) => (
          <Grid item md={6} key={`${category}-${i}`}>
            {"options" in item && <DrinkItem item={item} />}
            {"price" in item && <MenuItem item={item} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CategoryPanel;
