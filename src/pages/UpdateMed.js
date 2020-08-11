import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import ReactQuill from "react-quill";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateMed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    location: {
      state: { data },
    },
  } = useHistory();

  const [name, setName] = useState(data.name);
  const [groupName, setGroupName] = useState(data.groupName);
  const [company, setCompany] = useState(data.company);
  const [price, setPrice] = useState(data.price);
  const [packSize, setPackSize] = useState(data.packSize);
  const [desc, setDesc] = useState(data.desc);

  const reset = () => {
    // reset value
    setSuccess(false);
    setError(false);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset();
    try {
      if (name && groupName && company && price && packSize && desc) {
        const formData = {
          _id: data._id,
          name,
          groupName,
          company,
          price,
          packSize,
          desc,
        };
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        const resp = await Axios.post(
          `${process.env.REACT_APP_API}/medicine/update`,
          formData,
          {
            headers: {
              authorization: `bearer ${user.token}`,
            },
          }
        );
        if (resp.data.nModified === 0) {
          setLoading(false);
          return alert("No changes Found");
        }
        if (resp.status === 201) {
          setSuccess(true);
          console.log(resp);
        }
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <h1>Update Medicine</h1>
        {success ? <Success>Medicine Updated Successfully.</Success> : null}
        {error ? alert("something went wrong") : null}
        <StyledTextField
          variant="outlined"
          label="medicine name"
          required
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Group name"
          required
          defaultValue={data.groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Company name"
          required
          defaultValue={data.company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Unit Price"
          type="number"
          required
          defaultValue={data.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="pack Size"
          type="number"
          required
          defaultValue={data.packSize}
          onChange={(e) => setPackSize(e.target.value)}
        />
        {/* text editor */}
        <ReactQuill
          toolbar
          theme="snow"
          defaultValue={data.desc}
          onChange={(value) => setDesc(value)}
          placeholder="Write Description here"
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
          size="large"
          type="submit"
        >
          Update
        </Button>
      </StyledDiv>
    </form>
  );
};

export default UpdateMed;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledTextField = styled(TextField)`
  margin: 12px 0px;
`;

const Success = styled.p`
  padding: 9px 0px;
  background: green;
  text-align: center;
  color: #fff;
  font-size: 18px;
`;
