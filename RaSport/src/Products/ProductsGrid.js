import React from "react";
import stylepgrid from  "./ProductsGrid.css";
import InfiniteCarousel from 'react-leaf-carousel';

const productsgrid=(props)=>{
    const productsElements=[
        {id:"18",
        src:require("../assets/assets/Products/model 6.jpg"),
        alt:"Products",
        logoid:" ",
        logosrc:" ",
        logoalt:" ",
        type:"Men's clothes",
        price:"$50 ",
        brand: "Mobaco long sleeve ",
        style:[stylepgrid.Div1]
        
    },

        {logoid:"11",
        logosrc:require("../assets/assets/Products/logo 1.png"),
        logoalt:"Products",
        id:"14",
        src:require("../assets/assets/Products/model 1.png"),
        alt:"Products",
        brand:"Levi's short sleeve",
        type:"Men's clothes",
        price: "$30" ,
        style:[stylepgrid.Div2]

        },

        {logoid:"12",
        logosrc:require("../assets/assets/Products/logo 2.png"),
        logoalt:"Products",
        id:"15",
        src:require("../assets/assets/Products/model 2.png"),
        alt:"Products",
        brand:"Adidas short sleeve",
        type:"Men's clothes",
        price: "$50" ,
        style:[stylepgrid.Div3]

    },

        {logoid:"13",
        logosrc:require("../assets/assets/Products/logo 3.png"),
        logoalt:"Products",
        id:"16",
        src:require("../assets/assets/Products/model 3.png"),
        alt:"Products",
        brand:"Quiksilver short sleeve",
        type:"Men's clothes",
        price: "$20" ,
        style:[stylepgrid.Div4]

    },

        {id:"17",
        src:require("../assets/assets/Products/model 4.png"),
        alt:"Products",
        logoid:" ",
        logosrc:" ",
        logoalt:" ",
        type:"Men's clothes ",
        price:" $25",
        brand: "Concrete short sleeve ",
        style:[stylepgrid.Div5]

    },
 
    ];

    const productsOutput=productsElements.map(({style,logoid,logoalt,logosrc,alt,src,id,type,brand,price})=>{
   const stylingclass=style;
   
   return <div key={id} className={stylingclass.join(" ")}>
            <div className={stylepgrid.Pic}>
             <img  className={stylepgrid.Fig2} src={src} alt={alt} />  
            </div>
        <div className={stylepgrid.Subdiv}>
       <span className={stylepgrid.Span1}>{brand}</span>
       <span className={stylepgrid.Span2}>{type}</span>
       <span className={stylepgrid.Span3}>{price}</span>

        </div> 
        </div>

    })


    return (<div>
 <InfiniteCarousel 
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
      {productsOutput}
  </InfiniteCarousel>
  

    </div>
    )
}

export default productsgrid;