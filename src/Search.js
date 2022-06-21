import React from "react";
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Styles/search.css";
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
// import{useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Search=()=>{

  // const history=useHistory();
  const navigate=useNavigate();
  const [startDate,setStartDate]=useState(new Date());
  const[endDate,setEndDate]=useState(new Date());

  const SelectionDate={
    startDate:startDate,
    endDate:endDate,
    key:"selection",
  }

  const HandleChange=(ranges)=>
  {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    
  }




  return(
    <div className="search">

      <DateRangePicker ranges={[SelectionDate]} onChange={HandleChange}/>
      <h2>
        Number of Guest
    
        <GroupIcon/>
        </h2>

        <input min={0} defaultValue={2} type="number"/>
        <Button variant="outlined" onClick={()=>navigate("/search")} >Search Airbn</Button>
        

    

     

    </div>
  )
}
export default Search;