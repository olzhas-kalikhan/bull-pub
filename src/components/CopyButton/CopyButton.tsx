import { FC, useState } from "react";
import { ButtonBase, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CopyButtonProps = {
  content: string;
};
const CopyButton: FC<CopyButtonProps> = ({ content }) => {
  return (
    <ButtonBase
      sx={{ width: "100%", p: 1 }}
      onClick={() => {
        navigator.clipboard.writeText(content);
      }}
    >
      <ContentCopyIcon sx={{ mr: 1 }} />
      <Typography variant="h6">{content}</Typography>
    </ButtonBase>
  );
};
export default CopyButton;
