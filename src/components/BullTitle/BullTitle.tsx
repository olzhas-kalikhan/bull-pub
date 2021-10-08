import { Typography, Box } from "@mui/material";
import { keyframes } from "@mui/styled-engine";
const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  10%{
    opacity:1;
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`;

const BullTitle = () => {
  return (
    <Box
      sx={{
        width: "50%",
        px: 2,
        pt: 9,
        pb: 7,
        m: "auto",
        textShadow: "0em 0.1em 0.5em #000",
        backgroundColor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(2px)",
        animation: `${enterAnimation} 8s`,
        position: "relative",
      }}
    >
      <svg
        className="border-svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className={"title-border"} vectorEffect="non-scaling-stroke" />
        <path className={"title-border"} vectorEffect="non-scaling-stroke" />
        <path className={"title-border"} vectorEffect="non-scaling-stroke" />
        <path className={"title-border"} vectorEffect="non-scaling-stroke" />
      </svg>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ lineHeight: "2.7em" }}>
          <span
            style={{
              fontSize: "3.4rem",
              fontWeight: 600,
              fontFamily: "Passion One",
            }}
          >
            THE{" "}
          </span>
          <span
            style={{
              color: "#FE2626",
              fontFamily: "Passion One",
              fontSize: "3.5rem",
              fontWeight: 800,
            }}
          >
            {" "}
            BULL
          </span>
          <br />
          <span style={{ fontSize: "2.6rem", fontWeight: 200 }}>
            Pub & Grill
          </span>
        </Typography>
      </Box>
    </Box>
  );
};
export default BullTitle;
