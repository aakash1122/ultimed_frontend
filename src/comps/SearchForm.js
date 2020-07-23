import React, { useState } from "react";
import {
  Select,
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = () => {
  const [type, setType] = useState("brand");
  const [search, setSearch] = useState("");

  const searchMed = () => {
    // api call
    console.log(type, search);
  };

  return (
    <Box
      mt={6}
      p={5}
      className="shadow-1"
      style={{ background: "#fff", borderRadius: "15px" }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} md={9} lg={7}>
          <TextField
            variant="outlined"
            placeholder="Search By"
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2}>
          <FormControl
            variant="outlined"
            style={{ height: "100%", width: "100%" }}
          >
            <Select
              labelId="type"
              value={type}
              style={{ height: "100%", width: "100%" }}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <MenuItem value="brand">Brand</MenuItem>
              <MenuItem value="generic">Generic</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={3}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            startIcon={<SearchIcon />}
            style={{ width: "100%", height: "100%", minHeight: "55px" }}
            onClick={searchMed}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchForm;
