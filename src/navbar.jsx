import React from "react";


const Navbar=({toggle,handling})=>{

    return(<nav class="navbar navbar-expand-lg shadow p-3 mb-4 bg-body-tertiary">
    <div class="container-fluid">
      <button className="btn btn-primary" onClick={handling}>{ toggle ? (<i className="fa-solid fa-angles-right" style={{color: "#ffffff"}}></i>) : (<i className="fa-solid fa-angles-left" style={{color: "#ffffff"}}></i>)}</button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link tab active" aria-current="page" href="www.google.com">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link tab" href="www.google.com">Link</a>
          </li>
          
          
        </ul>
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
      </div>
    </div>
  </nav>)
}

export default Navbar;