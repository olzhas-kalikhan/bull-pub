import { Grid, Typography } from "@mui/material";
import MenuItem from "components/MenuItem";
import Responsive from "components/Responsive";
import { MENU_CATEGORIES } from "constants/menu.constants";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const half = Math.ceil(MENU_CATEGORIES.length / 2);
const DesktopMenu = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container columnSpacing={2} sx={{mt:5}}>
        <Grid item lg={6} md={6}>
          {MENU_CATEGORIES.slice(0, half).map((category) => (
            <Accordion key={category.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
        <Grid item lg={6} md={6}>
          {MENU_CATEGORIES.slice(-half).map((category) => (
            <Accordion key={category.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
      </Grid>
    </Responsive>
  );
};
export default DesktopMenu;
