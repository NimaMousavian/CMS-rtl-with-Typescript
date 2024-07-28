import React, { FC } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { red, green, yellow, blue } from "@mui/material/colors";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";
import { Theme } from "@mui/material/styles";
import { ButtonPropsColorOverrides } from "@mui/material/Button";
import OverridableStringUnion from "@mui/material/OverridableComponent";
import { useTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cancel: Palette["primary"];
  }

  interface PaletteOptions {
    cancel?: PaletteOptions["primary"];
  }
}

type ColorTheme =
  | "inherit"
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "info"
  | undefined;

const createBgColor = (theme: ColorTheme) => {
  if (theme === "primary") return "primary.lighter";
  if (theme === "secondary") return "secondary.light";
  if (theme === "error") return red[100];
  if (theme === "success") return green[100];
  if (theme === "warning") return yellow[100];
  if (theme === "info") return blue[100];
};

const createIcon = (theme: ColorTheme) => {
  if (theme === "primary") return null;
  if (theme === "secondary") return null;
  if (theme === "error")
    return <ErrorOutlineIcon sx={{ marginRight: "5px" }} />;
  if (theme === "success")
    return <CheckCircleOutlineIcon sx={{ marginRight: "5px" }} />;
  if (theme === "warning")
    return <WarningAmberIcon sx={{ marginRight: "5px" }} />;
  if (theme === "info") return <InfoIcon sx={{ marginRight: "5px" }} />;
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface Props {
  title: string;
  description: string;
  ApproveButton: string;
  theme: ColorTheme;
  onApprove: React.MouseEventHandler<HTMLButtonElement>;
}

const AdvancedModal: FC<Props> = ({
  title,
  description,
  ApproveButton,
  theme,
  onApprove,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme_ = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        مدال پیشرفته
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            bgcolor: createBgColor(theme),
          }}
          id="customized-dialog-title"
        >
          {title}
        </DialogTitle>
        <DialogContent dividers>{description}</DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            autoFocus
            onClick={onApprove}
            color={theme}
            variant="contained"
          >
            {ApproveButton}
            {createIcon(theme)}
          </Button>
          <Button
            autoFocus
            sx={{ marginRight: "10px" }}
            color="cancel"
            onClick={handleClose}
            variant="contained"
          >
            لغو
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default AdvancedModal;
