/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import "./sidebar.css";

const Accordian=({title,icon})=>{
    const [data, setdata] = useState(false);

    function handle() {
      if (data) {
        setdata(false)
      } else {
        setdata(true)
      }
    }
   return( <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <div class="accordion-header">

          <button className="accordion-button d-flex justify-content-between" onClick={handle} type="button" data-bs-toggle="collapse" data-bs-target={`collapse_${title}`} aria-expanded="true" aria-controls={`collapse_${title}`}>
            <div className="title">
              {icon}
              <span style={{ marginLeft: 8 }}>{title}</span>
            </div>
            <span className={`icon ${data ? 'rotate-icon' : ''}`}>
              <i className="fa-solid fa-angle-right" style={{ color: "#ffffff" }}></i>
            </span>
          </button>


        </div>
        <div id={`collapse_${title}`} className={`accordion-collapse collapse ${data ? "show" : ""}`} data-bs-parent="#accordionExample">
          
          <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active text-dark" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Disabled</a>
  </li>
</ul>
          </div>
        </div>
      
    </div>)
}

export default Accordian;