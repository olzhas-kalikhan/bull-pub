import { Divider, Grid, Typography } from "@mui/material";
import MenuItem from "components/MenuItem";
import Responsive from "components/Responsive";
import { MENU_CATEGORIES } from "./menuCategories";

const DesktopMenu = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container spacing={5}>
        {MENU_CATEGORIES.map((category) => (
          <Grid item lg={4} md={6}>
            <Typography variant="h4"> {category.id}</Typography>
            <Divider />
            {category.items?.map((item) => (
              <>
                <MenuItem item={item} />
                <Divider />
              </>
            ))}
            <Divider />
          </Grid>
        ))}
      </Grid>
    </Responsive>
  );
};
export default DesktopMenu;
