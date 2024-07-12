import React from "react";
import img from "./logo.png";
import {Link, NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        // ------- Nav Bar ------------- //
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid" id="Navbar">
    <a class="navbar-brand ms-lg-5" href="#"><img src={img}></img></a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-lg-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to ="/">HOME</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active mx-lg-4" aria-current="page" href="#"><NavLink to ="/About">ABOUT</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to ="/Shop">SHOP</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active mx-lg-4" aria-current="page" href="#"><NavLink to ="/Contact">CONTACT</NavLink></a>
        </li>   
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Navbar;