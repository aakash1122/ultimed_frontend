import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";

import TipsCard from "comps/TipsCard";
import { MyContext } from "context/context";

const AllTipses = () => {
  const [state, dispatch] = useContext(MyContext);
  // pull out tipses object from state
  const { tipses } = state;

  const [hasMore, setHaseMore] = useState(true);

  const fetchTips = async () => {
    try {
      dispatch({ type: "START_FETCH_Tips" });
      const page = Math.ceil(tipses.allTips.length / 6) + 1;
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/tips/all`,
        {
          params: { page },
        }
      );
      dispatch({ type: "FINISH_FETCH_TIPS", payload: data });

      if (data.length < 6) return setHaseMore(false);
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_TIPS", payload: error });
    }
  };

  useEffect(() => {
    if (!tipses.allTips.length) {
      fetchTips();
    }
  }, []);

  const fetchMore = async () => {
    try {
      const page = Math.ceil(tipses.allTips.length / 6) + 1;
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/tips/all`,
        {
          params: { page },
        }
      );
      dispatch({ type: "FINISH_FETCH_MORE_TIPS", payload: data });
      if (data.length < 6) return setHaseMore(false);
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_TIPS", payload: error });
    }
  };

  return (
    <div>
      <Typography
        variant="h5"
        style={{
          margin: "10px 0px 30px 0px",
          fontWeight: "bold",
          color: "#5e5e6f",
        }}
      >
        Health Tipses
      </Typography>

      {tipses.loading ? (
        <CircularProgress style={{ display: "block", margin: "auto" }} />
      ) : (
        <InfiniteScroll
          dataLength={tipses.allTips.length} //This is important field to render the next data
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
          <Grid container spacing={2} direction="row" alignItems="center">
            {tipses.allTips.length &&
              tipses.allTips.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item._id}>
                  <TipsCard data={item} />
                </Grid>
              ))}
          </Grid>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default AllTipses;
