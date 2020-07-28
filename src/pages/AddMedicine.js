import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import ReactQuill from "react-quill";

const AddMedicine = () => {
  const [details, setDetails] = useState("");

  return (
    <form>
      <StyledDiv>
        <h1>Add Medicine</h1>
        <StyledTextField variant="outlined" label="medicine name" />
        <StyledTextField variant="outlined" label="Group name" />
        <StyledTextField variant="outlined" label="Company name" />
        <StyledTextField variant="outlined" label="Unit Price" />
        <StyledTextField variant="outlined" label="pack Size" />
        {/* text editor */}
        <ReactQuill
          toolbar
          theme="snow"
          value={details}
          onChange={(value) => setDetails(value)}
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
