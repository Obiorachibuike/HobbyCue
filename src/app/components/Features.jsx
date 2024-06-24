import React from "react";
import Featuring from "./Featuring";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Features() {
  return (
    <>
      <section id="features">
        <div className="features-cont">
          <div className="features-content">
            <div className="feature flex justify-between">
              <Featuring
                icon={<GroupsIcon  className="purple"/>}
                iconName = "featuring-content"
                name="People"
                text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator. "
                btn="Connect"
                className= "featuring-cont"
                />
              <Featuring
                icon={<LocationOnIcon className="green" />}
                iconName = "featuring-content"
                name="Place"
                text="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
                btn="Meet up"
                className= "featuring-cont"
                />
            </div>
            <div className="feature flex justify-between">
              <Featuring icon={<ShoppingBasketIcon className='red' />} 
              iconName = "featuring-content"
              name="Product"
              text="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
              btn="Get it"
              className= "featuring-cont"
              />
              <Featuring icon={<AssignmentTurnedInIcon className="blue" />} 
               iconName = "featuring-content"
               name="Program"
               text="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
               btn="Attend"
               className= "featuring-cont"
               />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
