import React from "react";
import "./Styles/searchresult.css";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Searchresult=({
  img,location,title,description,star,price,total
})=>
{
  return(
    <div className="searchresult">
      
    <img src={img}/>
    <FavoriteBorderIcon className="favouriteicon" />
    <div className="searchresult-info">
      <div className="searchresult-infotop">
        <p>{location}</p>
        <h2>{title}</h2>
        <p>_______</p>
        <p>{description}</p>

      </div>
      <div className="searchresult-infobottom">
        <div className="searchresult-rating">
        < StarIcon className="searchresult-star"/>

       <strong>{star}</strong>

        </div>
       
        <div className="searchresult-price">
        <h3>{price}</h3>
        <p>{total}</p>

        </div>
        
      

      </div>
    </div>
  
      
    </div>

  )
}
export default Searchresult;