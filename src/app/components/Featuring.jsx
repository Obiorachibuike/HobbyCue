import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import "../Styles/Featuring.css";

function Featuring({icon,iconName,name,text,btn,className}) {
 
  return (
    <>
      <div className={className}>
        <div className={iconName}>
          <div className="fearting-heading">
          {icon}
          
            <h1>{name}</h1>
          </div>
          <div className="featuring-text">
       {text}
            </div>
            <div className="featuring-btn">{btn}</div>
        </div>
      </div>
    </>
  );
}

export default Featuring;
