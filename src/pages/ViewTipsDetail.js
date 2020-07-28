import React from "react";

import ViewTips from "comps/ViewTips";
import { Typography } from "@material-ui/core";

const ViewTipsDetail = ({ data }) => {
  return (
    <div>
      {data ? (
        <ViewTips />
      ) : (
        <Typography variant="h4" align="center">
          Not Found :(
        </Typography>
      )}
    </div>
  );
};

export default ViewTipsDetail;
