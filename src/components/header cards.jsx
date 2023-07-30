import React from "react";
import "./card.css"


const Card =({title,price,icon,color})=>{
    return(<div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
      <div class="card h-100 py-2 shadow-sm bg-body-tertiary rounded" style={{borderLeft: `5px solid ${color}`}}>
    <div class="card-body">
        <div className="row">
      <div className="col"><div style={{fontSize:12}}><b>{title}</b></div><div><h5 >{price}</h5></div></div>
      <div className="col-auto d-flex justify-content-center align-items-center"><div>{icon}</div></div>
      </div>
    </div>
  </div>
  </div>)
}

export default Card;