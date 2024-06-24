import React from 'react'

function AddFeatures({icon,iconName,name,text,btn}) {
  return (
    <>
          <div className="featuring-cont">
        <div className={iconName}>
          <div className="fearting-heading">
          {icon}
          
            <h1>{name}</h1>
          </div>
          <div className="featuring-text">
       {text}
            </div>
            
        </div>
      </div>
    </>
  )
}

export default AddFeatures