import { Typography, Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
// import SideBar from "./SideBar";
// import Videos from "./Videos";
import  Videos  from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

//here we are already in components folder so there is no need to write ./components
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams()
  useEffect(() => {
  
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh",  }}>
        
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
         Search results for {searchTerm} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;

