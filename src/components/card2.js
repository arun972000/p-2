import React from "react";


const Card2=({children,title})=>{
    return(
    <div class="card mb-4">
    <div class="card-header py-3 text-primary">
      <b>{title}</b>
    </div>
    <div className="card-body">
    {children}
    </div>
    
  </div>
)
}

export default Card2;