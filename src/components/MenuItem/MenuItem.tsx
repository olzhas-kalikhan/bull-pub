import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { MenuItem as MenuItemType } from "types/menu";

type MenuItemProps = {
  item: MenuItemType;
};
const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { title, description, options } = item;
  return (
    <Box sx={{ mt: 1, mb: 1 }} width="100%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">{title}</Typography>
        {options?.map(({ price, description }) => (
          <Typography variant="subtitle2">${price.toFixed(2)}</Typography>
        ))}
      </Box>
      {description && (
        <Typography variant="body2" color={"text.secondary"}>
          {description}
        </Typography>
      )}
      <Divider />
    </Box>
  );
};
export default MenuItem;
