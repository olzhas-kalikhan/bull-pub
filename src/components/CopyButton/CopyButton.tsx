import { Box, Fade, IconButton, Typography } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import Popover from "@mui/material/Popover";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";

type CopyButtonProps = {
  copyContent: string;
};
const CopyButton: FC<CopyButtonProps> = ({ copyContent }) => {
  const [copyPressed, setCopyPressed] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(copyContent);
    setCopyPressed(true);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };
  const handleClose = () => {
    setCopyPressed(false);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1">{copyContent}</Typography>
      <IconButton onClick={handleClick}>
        {copyPressed ? (
          <Fade in={copyPressed}>
            <LibraryAddCheckIcon />
          </Fade>
        ) : (
          <ContentCopyIcon />
        )}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        sx={{ overflowY: "hidden", opacity: 0.7 }}
      >
        <Typography variant="body1" sx={{ px: 2, py: 1 }}>
          Copied!
        </Typography>
      </Popover>
    </Box>
  );
};
export default CopyButton;
