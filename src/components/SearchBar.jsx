import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () =>{  
const [text,setText]=useState('')
const navigate=useNavigate()
const textHandler=(e)=>{
  setText(e.target.value)
}
const submitHandler=(e)=>{
e.preventDefault()
if(text){navigate(`/search/${text}`)}
else{
alert('type something')}
setText('')
}

   return (
  <Paper
    component="form"
    onSubmit={submitHandler}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="search.."
      value={text}
      onChange={textHandler}
    />
    <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
      <Search />
    </IconButton>
  </Paper>
)
};

export default SearchBar;
