import { SxProps } from "@mui/system";

export const ContainerSX = (bgImage?: String, centered?: Boolean): SxProps => {
  let optionalSX: SxProps = {};
  let defaultSX: SxProps = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  if (centered) {
    Object.assign(optionalSX, {
      justifyContent: "center",
      alignItems: "center",
    });
  }
  if (bgImage) {
    Object.assign(optionalSX, {
      backgroundImage: `url(${bgImage})`,
      backgroundColor: "background.default",
      backgroundSize: "250%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "soft-light",
    });
  }
  return {
    ...defaultSX,
    ...optionalSX,
  };
};
