import { FC } from "react";
import Alert from "@mui/material/Alert";

interface Props {
  title?: string;
  msg: string;
}

const ErrorBox: FC<Props> = ({ title = "خطا", msg }) => {
  return (
    <>
      <Alert severity="error">{msg}</Alert>
    </>
  );
};

export default ErrorBox;
