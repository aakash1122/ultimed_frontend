import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

import TipsCard from "comps/TipsCard";
import { MyContext } from "context/context";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";

const AllTipses = () => {
  const [state, dispatch] = useContext(MyContext);
  // pull out tipses object from state
  const { tipses } = state;

  const [tipsData, setTipsData] = useState([]);
  const [hasMore, setHaseMore] = useState(true);

  const fetchTips = async () => {
    try {
      dispatch({ type: "START_FETCH_TIPS" });
      const { data } = await Axios.get(`${process.env.REACT_APP_API}/tips/all`);
      dispatch({ type: "FINISH_FETCH_TIPS", payload: data });
      //keep 10 data to render
      setTipsData(data.slice(0, 6));
      if (data.length < 6) return setHaseMore(false);
    } catch (error) {
      dispatch({ type: "ERROR_FETCH_TIPS", payload: error });
    }
  };

  const fetchMore = () => {
    console.log("fetching again");
    setTimeout(() => {
      if (tipses.allTips.length === tipsData.length) {
        return setHaseMore(false);
      }
      setTipsData(
        tipsData.concat(
          tipses.allTipses.slice(tipsData.length, tipsData.length + 6)
        )
      );
    }, 600);
  };

  useEffect(() => {
    // * if data available then dont fetch
    if (!tipses.allTips.length > 0) {
      fetchTips();
    }
    console.log(tipses.allTips.length, tipsData.length);
    if (tipses.allTips.length < 6) {
      setTipsData(tipses.allTips);
      setHaseMore(false);
    }
  }, []);

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
          dataLength={tipsData} //This is important field to render the next data
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
            {tipsData.map((item) => (
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
