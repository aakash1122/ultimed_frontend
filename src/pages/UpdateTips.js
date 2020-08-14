import React, { useEffect, useContext, useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Card,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import MessageShow from "comps/MessageShow";
import ViewTips from "comps/ViewTips";
import Axios from "axios";
import { MyContext } from "context/context";

const UpdateTips = () => {
  const {
    location: {
      state: { data },
    },
  } = useHistory();

  const { register, handleSubmit, setValue, watch, errors } = useForm();

  const [state] = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  //... extract value from react-hook-form
  const watchTitle = watch("title");
  const watchImageUrl = watch("imageUrl");
  const watchBody = watch("desc");

  useEffect(() => {
    register("desc", {
      required: { value: true, message: "TIPS body required" },
      minLength: {
        value: 100,
        message: "TIPS body requires at least 100 characters",
      },
    });
    setValue("desc", data.desc);
  }, [register]);

  const handleChange = (value) => {
    setValue("desc", value);
  };

  const resetForm = () => {
    setValue("title", "", { shouldValidate: true });
    setValue("desc", "", { shouldValidate: true });
    setValue("imageUrl", { shouldValidate: true });
  };

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const resp = await Axios.post(
        `${process.env.REACT_APP_API}/tips/update`,
        { ...formData, _id: data._id },
        {
          headers: {
            authorization: `bearer ${state.user.token}`,
          },
        }
      );
      if (resp.data.nModified === 0) {
        setLoading(false);
        return alert("No changes Found");
      }
      if (resp.status === 201) {
        alert("Post Updated");
        resetForm();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <Card style={{ padding: "20px" }}>
        <Typography
          variant="h6"
          style={{
            margin: "10px 0px 20px",
            fontWeight: "bold",
            color: "#626172",
          }}
        >
          Update Health Tips with updated information
        </Typography>
        {loading ? (
          <CircularProgress style={{ display: "block", margin: "auto" }} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  placeholder="Give Tips a title."
                  fullWidth
                  name="title"
                  defaultValue={data.title}
                  inputRef={register({
                    required: {
                      value: true,
                      message: "TIPS title is required!",
                    },
                    minLength: {
                      value: 10,
                      message: "TIPS tilte requires at least 10 Characters",
                    },
                  })}
                />
                {errors.title && (
                  <MessageShow text={errors.title.message} type="error" />
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Cover image url"
                  variant="outlined"
                  type="url"
                  fullWidth
                  name="imageUrl"
                  defaultValue={data.imageUrl}
                  inputRef={register({
                    required: {
                      value: true,
                      message: "TIPS image is required in URL format",
                    },
                    pattern: {
                      value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                      message:
                        "Invalid image URL format.Please provide a valid URL.",
                    },
                  })}
                />
                {errors.imageUrl && (
                  <MessageShow text={errors.imageUrl.message} type="error" />
                )}
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  name="desc"
                  toolbar
                  theme="snow"
                  minLength="100"
                  defaultValue={data.desc}
                  onChange={handleChange}
                  placeholder="Write tips here"
                />
                {errors.desc && (
                  <MessageShow text={errors.desc.message} type="error" />
                )}
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
        )}
      </Card>
      {loading ? null : (
        <>
          {watchTitle || watchBody ? (
            <PreviewText>Live Preview</PreviewText>
          ) : null}
          <ViewTips
            data={{
              title: watchTitle,
              imageUrl: watchImageUrl,
              desc: watchBody,
              created_at: Date.now(),
              author: {
                name: state.user.name,
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default UpdateTips;

const PreviewText = styled.p`
  font-size: 26px;
  margin: 25px 0px -10px 0px;
  font-weight: normal;
`;
