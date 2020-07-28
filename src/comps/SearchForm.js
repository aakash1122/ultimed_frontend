import React, { useState, useContext } from "react";
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
import axios from "axios";

import { MyContext } from "context/context";

const SearchForm = () => {
  const [state, dispatch] = useContext(MyContext);

  const [type, setType] = useState("name");
  const [search, setSearch] = useState("");

  const searchMed = async () => {
    dispatch({ type: "SEARCH_MED" });
    try {
      // api call
      const resp = await axios.post(
        `${process.env.REACT_APP_API}/medicine/search`,
        { query: search, searchType: type }
      );
      dispatch({ type: "FINISH_SEARCH_MED", payload: resp.data });
    } catch (error) {
      dispatch({ type: "FINISH_SEARCH_MED", payload: [] });
    }
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
              <MenuItem value="name">Brand</MenuItem>
              <MenuItem value="group">Generic</MenuItem>
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
