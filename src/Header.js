import React from "react";
import "./Styles/header.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import {Link }from "react-router-dom";

const Header=()=>
{
  return(
    <div className="header">
      <Link to="/">
      <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"/>

      </Link>
     
      <div className="header-center">
        <input type="text"/>
        <SearchIcon/>

      </div>
      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon/>
        <KeyboardArrowDownIcon/>
        <Avatar/>

      </div>

    </div>
  )
}
export default Header;