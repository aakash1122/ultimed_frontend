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

  const [medData, setMedData] = useState([]);
  const [hasMore, setHaseMore] = useState(true);

  const classes = styles();

  const fetchMed = async () => {
    try {
      dispatch({ type: "START_FETCH_MED" });
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/medicine/all`
      );
      dispatch({ type: "FINISH_FETCH_MED", payload: data });
      //keep 10 data to render
      setMedData(data.slice(0, 12));
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_MED", payload: error });
    }
  };

  const fetchMore = () => {
    console.log("fetching again");
    setTimeout(() => {
      if (meds.allMeds.length === medData.length) {
        console.log("no more data");
        return setHaseMore(false);
      }
      setMedData(
        medData.concat(meds.allMeds.slice(medData.length, medData.length + 12))
      );
    }, 600);
  };

  useEffect(() => {
    // * if data available then dont fetch
    if (!meds.allMeds.length > 0) {
      fetchMed();
    }
    setMedData(meds.allMeds.slice(0, 12));
  }, [meds.allMeds.length]);

  const Medicines = medData.map((item) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
        <MedCard data={item} />
      </Grid>
    );
  });

  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        ALL Medicines
      </Typography>
      {meds.loading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <InfiniteScroll
          dataLength={medData} //This is important field to render the next data
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
            {Medicines}
          </Grid>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default AllMedicines;
