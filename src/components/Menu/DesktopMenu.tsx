import { Grid, Typography } from "@mui/material";
import MenuItem from "components/MenuItem";
import Responsive from "components/Responsive";
import { Category, MENU_CATEGORIES } from "constants/menu.constants";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const organizedCategories = () => {
  const out: Category[][] = [[], []];
  MENU_CATEGORIES.forEach((category, i) => {
    if (i % 2 === 0) {
      out[0].push(category);
    } else {
      out[1].push(category);
    }
  });
  return out;
};
const DesktopMenu = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container sx={{ mt: 5 }}>
        {organizedCategories().map((categories) => (
          <Grid item lg={6} md={6}>
            {categories.map((category) => (
              <Accordion defaultExpanded key={category.id} square>
                <AccordionSummary>
                  <Typography variant="h4"> {category.id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {category.items?.map((item, i) => (
                    <MenuItem key={`${category}-${i}`} item={item} />
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        ))}
      </Grid>
    </Responsive>
  );
};
export default DesktopMenu;
