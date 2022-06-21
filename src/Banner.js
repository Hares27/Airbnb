import React from "react";
import "./Styles/banner.css";
import Button from '@mui/material/Button';
import {useState} from "react";
import Search from "./Search.js";
// import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Banner=()=>
{

  // const history=useHistory();
  const navigate=useNavigate();
  const[showSearch,setShowSearch]=useState("false");
  return(
    <div className="banner">

      <div className="show-datepicker">
        {showSearch && <Search/>}
      </div>
      <div className="banner-search">
      <Button onClick={()=>{setShowSearch(!showSearch)}}  className="banner-search-button"variant="outlined">{showSearch?"Hide":"Search Date"}</Button>

      </div>
     

      <div className="banner-info">
      <h2>Get out and stretch your imagination</h2>
      <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
      <Button variant="outlined" onClick={()=>navigate("/search")} >Explore Nearby</Button>
      
      </div>

    
    </div>

  )
}
export default Banner;