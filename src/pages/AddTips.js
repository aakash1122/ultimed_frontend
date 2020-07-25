import React, { useState } from "react";
import { TextField, Grid, Button, Card, Typography } from "@material-ui/core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ViewTips from "comps/ViewTips";

const AddTips = () => {
  const [title, setTitle] = useState("how to stop hairfall in 10 mins");
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1595666225614-6886bfcce4cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  );
  const [body, setBody] = useState("some randome descriptdjfalfjsdl");

  const formData = {
    title,
    imageUrl,
    body,
  };

  return (
    <div>
      <Card style={{ padding: "20px" }}>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                placeholder="Give Tips a title."
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Cover image url"
                variant="outlined"
                type="url"
                fullWidth
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill
                toolbar
                theme="snow"
                value={body}
                onChange={(value) => setBody(value)}
                placeholder="Write tips here"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                disableElevation
                size="large"
                centerRipple
              >
                Upload
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      {title || body ? <Typography variant="h6"> Preview</Typography> : null}
      <ViewTips data={formData} />
    </div>
  );
};

export default AddTips;
