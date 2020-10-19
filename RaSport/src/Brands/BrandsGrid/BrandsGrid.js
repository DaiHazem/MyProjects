import React from "react";
import Brandcard from "../BrandsCards";
import stylegrid from "./BrandsGrid.css";
import images from "../../Logo/Image/Image";


const brandgrid=(props)=>{
  const imageElement= images.map(({id,src,alt})=><img  key={id} src={src}  alt={alt} />)
  
return (
      <div className={stylegrid.Grid}>
        
          <figure className={stylegrid.Item1}>
          { imageElement[4]}
          </figure>
     
   <Brandcard>
       {imageElement[0]}</Brandcard>

   <Brandcard>
       {imageElement[1]}</Brandcard>

 <figure className={stylegrid.Item2}> {imageElement[5]}</figure>
 
 <Brandcard>
     {imageElement[2]}</Brandcard>

 <figure className={stylegrid.Item3}> 
 {imageElement[6]}</figure>

 <figure className={stylegrid.Item4}>
      {imageElement[7]}</figure>


<Brandcard>
    {imageElement[3]}</Brandcard>

      </div>
  )
  
   
}

export default brandgrid;