import React, { useState } from "react";
import { TextField, Grid, Button, Card } from "@material-ui/core";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";

import ViewTips from "comps/ViewTips";

const AddTips = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");

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
      {title || body ? <PreviewText>Live Preview</PreviewText> : null}
      <ViewTips data={formData} />
    </div>
  );
};

export default AddTips;

const PreviewText = styled.p`
  font-size: 26px;
  margin: 20px 0px 0px 0px;
  font-weight: normal;
`;
