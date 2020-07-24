import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarMessage = ({ msg, type }) => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert onClose={() => setOpen(false)} severity={type}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
