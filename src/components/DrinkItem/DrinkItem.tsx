import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { DrinkMenuItem } from "constants/drinks.constants";

type DrinkItemProps = {
  item: DrinkMenuItem;
};
const DrinkItem: FC<DrinkItemProps> = ({ item }) => {
  const { title, description, options, logo } = item;
  return (
    <>
      <Box
        sx={{
          mt: 1,
          mb: 1,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">{title}</Typography>
          {logo && (
            <img
              src={logo}
              alt={`${title}-logo`}
              style={{ objectFit: "contain" }}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {options?.map(({ price }, i) => (
              <Box
                key={`${title}-option-${i}`}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                {/* <Typography
                variant="subtitle2"
                sx={{ fontWeight: 200, textTransform: "lowercase" }}
              >
                {" "}
                ({size})
              </Typography> */}
                <Typography ml={1} variant="subtitle2">
                  ${price.toFixed(2)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {description && (
          <Typography variant="body2" color={"text.secondary"}>
            {description}
          </Typography>
        )}
      </Box>
      <Divider />
    </>
  );
};
export default DrinkItem;
