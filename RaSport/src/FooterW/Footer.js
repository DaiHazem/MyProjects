import React from "react";
import stylefooter from "./Footer.css";
import images from "../Logo/Image/Image";
import Logo from "../Logo/Logo";


const footer=(props)=>{
  const imageElement= images.map(({id,src,alt})=><img  key={id} src={src}  alt={alt} />)
  const imageArray= imageElement.slice(14,24);
  const imageOutput=imageArray.map(el=>el); 

  return(
 <div className={stylefooter.Footer}>
     <h5>SUBSCRIBE TO RA SPORT NEWSLETTER</h5>
     <div className={stylefooter.Input}>
     <input placeholder="Your E-mail Address" type="e-mail">
     </input> <span className={stylefooter.Footerspan}>Sign up</span>
     </div>
     <h6>Choose your favourite brand</h6>
     <p>RaSport company for import & export SAE is a leading
         Egyptian retail company franchising and managing some of the best
         international brands. 
     </p>
     {imageOutput}
     <h6>PAYMENT METHODS</h6>
     {imageElement[24]}
     <div className={stylefooter.Footerlogo}>
     <Logo/>
     <span>Copyright RaSport 2020.All rights are reserved</span>
     </div>

 </div>
)

}

export default footer;