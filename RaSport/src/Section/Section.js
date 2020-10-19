import React from "react";
import images from "../Logo/Image/Image";
import stylesection from "./Section.css";
import MapImage from "../Logo/Image/LocationImage";

const section=(props)=>{
    const image=images.map(({src,alt,id})=><img src={src} key={id} alt={alt}/>)
    return(
        <div>
        <div  className={stylesection.Containerbox}>
            <div className={stylesection.imageelement}>
                {image[8]}
                {image[9]}
            </div>
            <section className={stylesection.Section}>
            <h3><span className={stylesection.Span1}>WE ARE</span> MORE THAN A BUSINESS</h3>
            <p>we are more than a business, we are an 
            en extended family of young , open-minded,ambitious
            and always enthusiastic experts with various background.we are more than a business, we are an 
            en extended family of young , open-minded,ambitious
            and always enthusiastic experts with various background.</p>
           <span className={stylesection.Span2}>Learn more →</span>
            </section>
            </div>
            <MapImage/>
        </div>
    )
}

export default section;