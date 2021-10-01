import { Fade, Typography, Box } from "@mui/material";
const BullTitle = () => {
  return (
    <Box
      sx={{
        px: 8,
        py: 4,
        m: "auto",
        textShadow: "0em 0.1em 0.5em #000",
      }}
    >
      <Fade appear in timeout={1000}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1">
            The <span style={{ color: "#FE2626" }}> BULL</span>
          </Typography>

          <Typography variant="h3">Pub & Grill</Typography>
        </Box>
      </Fade>
    </Box>
  );
};
export default BullTitle;
