import { FC } from "react";
import Screen from "components/Screen";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutImg from "assets/img/about1.jpg";
import aboutImg2 from "assets/img/about2.jpg";
import aboutImg3 from "assets/img/about3.jpg";
import aboutImg4 from "assets/img/about4.jpg";
import aboutImg5 from "assets/img/about5.jpg";

const ABOUT_IMGS = [
  { src: aboutImg4 },
  { src: aboutImg, cols: 2 },
  { src: aboutImg2 },
  { src: aboutImg3, cols: 2 },
  { src: aboutImg5, cols: 2 },
];
const About: FC = () => {
  return (
    <Screen>
      <Grid container columnSpacing={10}>
        <Grid item md={12}>
          <Typography variant="h2" align="center" mt={3}>
            About
          </Typography>
          <Box px={10} sx={{ display: "grid", placeItems: "center" }}>
            <Typography variant="body2" align="center" mt={3}>
              The Bull Pub and Grill brings you an atmosphere like no other. We
              have delicious menu items, fantastic service, a great variety of
              cocktails and beers. Always showing all your favourite sports on
              multiple screens: NHL, NBA, MLB, Premier League and more!
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12}>
          <ImageList variant="quilted" cols={4} rowHeight={200}>
            {ABOUT_IMGS.map(({ src, cols }, i) => (
              <ImageListItem key={`aboutImg-${i}`} cols={cols || 1}>
                <img src={src} alt={`about-${i}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Screen>
  );
};
export default About;
