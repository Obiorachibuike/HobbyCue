import React from 'react'
import Featuring from "./Featuring";
import { AddCircle } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import "../Styles/ListPage.css";
import AddFeatures from './AddFeatures';

function ListPage() {
  return (
    <>
           <section id="add_new">
        <div className="add-new-cont">
          <div className="add-new-content">

            <div className="add-listing-heading-cont flex">
            <div className="add-listing-heading flex">

          <AddCircle className="blue" />
          <h1>Add Your Listing</h1>
            </div>
            </div>
   
            <div className="feature flex justify-between">
              <AddFeatures
                icon={<GroupsIcon  className="purple"/>}
                iconName = "new_purple"
                name="People"
                text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator. "
                
                
                 className= "featuring-cont "
                 />
              <AddFeatures
                icon={<LocationOnIcon className="green" />}
                iconName = "new_green"
                name="Place"
                text="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
                
                className= "featuring-cont"
                />
            </div>
            <div className="feature flex justify-between">
              <AddFeatures icon={<ShoppingBasketIcon className='red' />} 
              iconName = "new_red"
              name="Product"
              text="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
              
              className= "featuring-cont"
              />
              <AddFeatures icon={<AssignmentTurnedInIcon className="blue" />} 
               iconName = "new_blue"
               name="Program"
               text="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
              
               className= "featuring-cont"
               />
            </div>

            {/* <Featuring
              icon={<AddCircle className="blue" />}
              iconName="featuring-div"
              name="Add your own"
              text="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page"
             
              btn="Attend"
            /> */}
         
          </div>
        </div>
      </section>
    </>
  )
}

export default ListPage