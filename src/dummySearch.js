import React from "react";
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {useState} from "react";

const Search=()=>{
  const[startdate,setStartdate]=useState(new Date());
  const[enddate,setEnddate]=useState(new Date());

  const Selectionrange=
  {
    startdate:startdate,
    enddate:enddate,
    key:"selection",

  };
  const handlechange=(range)=>
  {
    setStartdate(range.selection.startdate);
    setEnddate(range.selection.enddate);
  }


  return(
    <div className="search">
      <DateRangePicker range={[Selectionrange]} OnChange={handlechange} />

    </div>
  )
}
export default Search;