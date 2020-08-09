import React, { useEffect, useContext, useState } from "react";

import ViewTips from "comps/ViewTips";
import { Typography, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { MyContext } from "context/context";
import Axios from "axios";

const ViewTipsDetail = () => {
  const { id } = useParams();

  const [state, dispatch] = useContext(MyContext);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  // pull out all tipses object
  const {
    tipses: { allTips },
  } = state;

  useEffect(() => {
    if (allTips.length === 0) {
      async function fetchTips() {
        dispatch({ type: "START_FETCH_TIPS" });
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API}/tips/all`
        );
        dispatch({ type: "FINISH_FETCH_TIPS", payload: data });
      }
      fetchTips();
    } else {
      // find tips according to id
      setTips(allTips.filter((tips) => tips._id === id));
      setLoading(false);
    }
  }, [allTips, id, dispatch]);

  if (loading) {
    return (
      <CircularProgress style={{ display: "block", margin: "20px auto" }} />
    );
  }
  if (!loading && tips.length === 0) {
    return (
      <Typography variant="h4" align="center">
        Tips not found!
      </Typography>
    );
  }
  return (
    <div>
      <ViewTips data={tips[0]} />
    </div>
  );
};

export default ViewTipsDetail;
