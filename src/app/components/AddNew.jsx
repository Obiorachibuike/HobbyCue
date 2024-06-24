import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Featuring from "./Featuring";
import { AddCircle } from "@mui/icons-material";

function AddNew() {
  return (
    <>
      <section id="add_new">
        <div className="add-new-cont">
          <div className="add-new-content">
            <Featuring
              icon={<AddCircle className="blue" />}
              iconName="featuring-div"
              name="Add your own"
              text="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page"
             
              btn="Attend"
            />
         
          </div>
        </div>
      </section>
    </>
  );
}

export default AddNew;
