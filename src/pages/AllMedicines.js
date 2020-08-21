import React, { useContext, useEffect, useState } from "react";
import { Typography, Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import MedCard from "comps/MedCard";
import { MyContext } from "context/context";

const styles = makeStyles((theme) => ({
  heading: {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#626172",
  },
}));

const AllMedicines = () => {
  const [state, dispatch] = useContext(MyContext);
  //* pull out meds data
  const { meds } = state;

  const [hasMore, setHaseMore] = useState(true);

  const classes = styles();

  const fetchMed = async () => {
    try {
      dispatch({ type: "START_FETCH_MED" });
      const page = Math.ceil(meds.allMeds.length / 8) + 1;
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/medicine/all`,
        {
          params: { page },
        }
      );
      dispatch({ type: "FINISH_FETCH_MED", payload: data });
      if (data.length < 8) return setHaseMore(false);
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_MED", payload: error });
    }
  };

  useEffect(() => {
    if (!meds.allMeds.length) {
      fetchMed();
    }
  }, []);

  const fetchMore = async () => {
    try {
      const page = Math.ceil(meds.allMeds.length / 8) + 1;
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/medicine/all`,
        {
          params: { page },
        }
      );
      dispatch({ type: "FINISH_FETCH_MORE_MED", payload: data });
      if (data.length < 8) return setHaseMore(false);
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_MED", payload: error });
    }
  };

  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        ALL Medicines
      </Typography>
      {meds.loading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <InfiniteScroll
          dataLength={meds.allMeds.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={hasMore}
          loader={
            <CircularProgress
              style={{ display: "block", margin: "10px auto" }}
            />
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          style={{ overflow: "hidden" }}
        >
          <Grid container spacing={2}>
            {meds.allMeds.length &&
              meds.allMeds.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                    <MedCard data={item} />
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default AllMedicines;
