import { FC } from "react";
import Screen from "components/Screen";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutImg from "assets/img/about1.jpg";
import SectionTitle from "components/SectionTitle";

const About: FC = () => {
  return (
    <Screen>
      <SectionTitle title="about" bgImage={aboutImg} />
      <Grid container columnSpacing={0} justifyContent="center">
        <Grid item md={8}>
          <Box px={5} sx={{ display: "grid", placeItems: "center" }}>
            <Typography
              variant="h1"
              align="center"
              sx={{
                mt: 10,
                fontSize: "1.8rem",
                fontWeight: 200,
                textAlign: "left",
                lineHeight: "1.3em",
              }}
              data-aos="fade"
            >
              The Bull Pub and Grill brings you an atmosphere like no other. We
              have delicious menu items, fantastic service, a great variety of
              cocktails and beers. Always showing all your favourite sports on
              multiple screens: NHL, NBA, MLB, Premier League and more!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Screen>
  );
};
export default About;
