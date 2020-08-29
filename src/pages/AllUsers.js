import React, { useContext, useState } from "react";
import { Grid, Button, Divider, CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import { useQuery } from "react-query";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import ProfileCard from "comps/ProfileCard";
import { MyContext } from "context/context";

const AllUsers = () => {
  const history = useHistory();
  const [state] = useContext(MyContext);
  const { user } = state;
  const [deleting, setDeleting] = useState(false);

  const { isLoading, error, data } = useQuery("allUsers", () => {
    return Axios.get(`${process.env.REACT_APP_API}/auth/users`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
  });

  const handleDeleteUser = async (id) => {
    try {
      setDeleting(true);
      const resp = await Axios.post(
        `${process.env.REACT_APP_API}/auth/users/remove`,
        { id: id },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (resp.status === 200) {
        alert("USER removed.");
        window.location.replace("/users/all");
        setDeleting(false);
      }
    } catch (error) {
      alert("something went wrong");
      setDeleting(false);
    }
  };

  if (isLoading)
    return <CircularProgress style={{ display: "block", margin: "auto" }} />;

  if (error) return <h1>Something Went Wrong!</h1>;

  return (
    <div>
      <Backdrop open={deleting} style={{ zIndex: "999", color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h3 style={{ margin: "20px auto", textAlign: "center" }}>
        ALL REGISTER USERS
      </h3>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid
        container
        spacing={9}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {data.data.map((user) => {
          return (
            <Grid item xs={12} key={user._id}>
              <ProfileCard user={user} />
              <Grid
                container
                justify="center"
                spacing={2}
                style={{
                  marginTop: "20px",
                }}
              >
                <Grid item xs={12} sm={4} md={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      fontWeight: "bold",
                    }}
                    fullWidth
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    delete User
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <Button
                    variant="contained"
                    style={{
                      fontWeight: "bold",
                    }}
                    fullWidth
                    onClick={() => {
                      history.push(`/profile/${user._id}`);
                    }}
                  >
                    View Profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AllUsers;
