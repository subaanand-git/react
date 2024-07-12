import React from "react";

const Contact = ()=>{
    return(
        <div class="container-fluid">
            {/*  -------- content-4 ---------*/}
        <div class="row">
            {/* ------- content-4 (Grid 1)---------- */}
            <div class="col-lg-4 text-center my-lg-5" id="content4">
             <i class="bi bi-telephone p-lg-1"></i>
             <h4 class="mt-lg-3">Phone:</h4>
             <p>(719)445-208</p>
            </div>
            {/* ------- content-4 (Grid 2)---------- */}
            <div class="col-lg-4 text-center my-lg-5" id="content4">
            <i class="bi bi-geo-alt p-lg-1"></i>
            <h4 class="mt-lg-3">Address:</h4>
            <p>4578 Whitefield,Bangalore</p>
            </div>
            {/* ------- content-4 (Grid 3)---------- */}
            <div class="col-lg-4 text-center my-lg-5" id="content4">
            <i class="bi bi-envelope p-lg-1"></i>
            <h4 class="mt-lg-3">Email:</h4>
            <p>royalinfo@gmail.com</p>
            </div>
        </div>
         {/*  -------- content-5 ---------*/}
        <div class="row">
             {/* ------- content-5 (Grid 1)---------- */}
           <div class="col-lg-6 text-center" id="content5">
           <input class="form-control ms-lg-5" type="text" placeholder="Your Name" aria-label="default input example"></input>
           <input class="form-control ms-lg-5 my-3" type="text" placeholder="Your Email" aria-label="default input example"></input>
           <input class="form-control ms-lg-5" type="text" placeholder="Your Website" aria-label="default input example"></input>
           <input class="form-control ms-lg-5 my-3" type="text" placeholder="Your Company" aria-label="default input example"></input>
           </div>
           {/* ------- content-5 (Grid 2)---------- */}
           <div class="col-lg-6 text-center" id="content5">
           <textarea class="form-control mb-lg-0 mb-3" id="exampleFormControlTextarea1" placeholder="Your comment" rows="4"></textarea>
           <button type="button" class="btn btn-secondary btn-lg mt-lg-5">SEND MESSAGE</button>
           </div>
        </div>










        </div>
    );
}
export default Contact;