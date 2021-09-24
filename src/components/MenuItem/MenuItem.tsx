import { FC } from "react";
import { Box, Fade, ListItem, Typography } from "@mui/material";
import { FoodItem } from "components/Menu/menuCategories";

type MenuItemProps = {
  item: FoodItem;
};
const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { title, description, price } = item;
  return (
    <Fade in appear timeout={500}>
      <Box sx={{ mt: 1, mb: 1 }} width="100%">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">{title}</Typography>
          {price && <Typography>${price}</Typography>}
        </Box>
        {description && (
          <Typography variant="caption" color={"text.secondary"}>
            {description}
          </Typography>
        )}
      </Box>
    </Fade>
  );
};
export default MenuItem;
