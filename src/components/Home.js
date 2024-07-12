import React from "react";
import img1 from "./pic1.jfif";
import img2 from "./pic2.jfif";
import img3 from "./pic3.jfif";

const Home = ()=>{
    return(
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Amazing Exclusive Design</h5>
              <p>Elegant and chic Furniture For Those Who Value Comfort</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Authentic And Luxurious</h5>
              <p>Your Home Deserves Special And Selected Furnishings.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Modern Living Room Sets</h5>
              <p>Created by Designers, Suitable for All Interiors</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      

    );
}
export default Home;