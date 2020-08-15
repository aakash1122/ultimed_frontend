import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

import { MyContext } from "context/context";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

const DeleteTips = ({ id }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(MyContext);

  const isAdmin = state.user.isAdmin;

  if (!isAdmin) return null;

  const handleDelete = async () => {
    setLoading(true);
    // perform delete request
    const resp = await axios.delete(
      `${process.env.REACT_APP_API}/tips/delete`,
      {
        headers: {
          authorization: `bearer ${state.user.token}`,
        },
        params: {
          id,
        },
      }
    );

    if (resp.data.deletedCount) {
      setIsOpen(false);
      alert("Tips Deleted");
      window.location.replace("/all-tipses");
    } else {
      setIsOpen(false);
      window.Error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        onClick={() => setIsOpen(true)}
        size="large"
        style={{ display: "block", marginTop: "20px" }}
      >
        Delete Tips
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          {loading ? (
            <h3>Deleting......</h3>
          ) : (
            <>
              <h3>Are you sure you want to perform this action?</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleDelete}
                >
                  Yes Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsOpen(false)}
                >
                  No
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default DeleteTips;
