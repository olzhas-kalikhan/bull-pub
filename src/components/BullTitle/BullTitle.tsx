import { Fade, Typography } from "@mui/material";

const BullTitle = () => {
  return (
    <Fade appear in timeout={1000}>
      <div>
        <Typography variant="h5">The</Typography>
        <Typography
          variant="h1"
          sx={{ color: "secondary.main", display: "inline" }}
        >
          BULL
        </Typography>
        <Typography variant="h3">Pub & Grill</Typography>
      </div>
    </Fade>
  );
};
export default BullTitle;
