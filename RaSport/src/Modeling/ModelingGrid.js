import React from "react";
import Modelcard from "./ModelingCard";
import stylemgrid from "./ModelingGrid.css";
import images from "../Logo/Image/Image";


const modelgrid=(props)=>{
  const imageElement= images.map(({id,src,alt})=><img  key={id} src={src}  alt={alt} />)
  
return ( <div>
      <div className={stylemgrid.Grid}>
        
          <figure className={stylemgrid.Item1}>
          { imageElement[10]}
          </figure>
     
          <Modelcard></Modelcard>
          <Modelcard></Modelcard>
       
 <figure className={stylemgrid.Item2}> {imageElement[11]}</figure>
 
 <Modelcard></Modelcard>


 <figure className={stylemgrid.Item3}> 
 {imageElement[12]}</figure>

 <figure className={stylemgrid.Item4}>
      {imageElement[13]}</figure>


      <Modelcard></Modelcard>


      </div>
      <div className={stylemgrid.News}>More News</div>
      </div>
  )
  
   
}

export default modelgrid;