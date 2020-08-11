import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import ReactQuill from "react-quill";
import Axios from "axios";

const AddMedicine = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [packSize, setPackSize] = useState("");
  const [desc, setDesc] = useState("");

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
        const data = { name, groupName, company, price, packSize, desc };
        console.log(data);
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        const resp = await Axios.post(
          `${process.env.REACT_APP_API}/medicine/add`,
          data,
          {
            headers: {
              authorization: `bearer ${user.token}`,
            },
          }
        );

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
        <h1>Add Medicine</h1>
        {success ? <Success>Medicine Added Successfully.</Success> : null}
        {error ? alert("something went wrong") : null}
        <StyledTextField
          variant="outlined"
          label="medicine name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Group name"
          required
          onChange={(e) => setGroupName(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Company name"
          required
          onChange={(e) => setCompany(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Unit Price"
          type="number"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="pack Size"
          type="number"
          required
          onChange={(e) => setPackSize(e.target.value)}
        />
        {/* text editor */}
        <ReactQuill
          toolbar
          theme="snow"
          value={desc}
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
          Add Medicine
        </Button>
      </StyledDiv>
    </form>
  );
};

export default AddMedicine;

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
