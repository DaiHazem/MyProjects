import React from "react";
import styleproducts from "./Products.css";
import Productsgrid from "./ProductsGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'


const product=(props)=>{
    return(
        <div>
        <div className={styleproducts.Last}>
             <div className={styleproducts.Content}>
            <h2> BEST SELLER PRODUCTS</h2>
            <p>Browse our sites now and buy what you want in a shared basket </p>
            </div>
            <div className={styleproducts.Circle3}>
            <div className={styleproducts.Rotated3}>&#707;</div>
            <span className={styleproducts.Letter1}>M</span>
            <span className={styleproducts.Letter2}>O</span>
            <span className={styleproducts.Letter3}>R</span>
            <span className={styleproducts.Letter4}>E</span>
            <span className={styleproducts.Letter5}>P</span>
            <span className={styleproducts.Letter6}>R</span>
            <span className={styleproducts.Letter7}>O</span>
            <span className={styleproducts.Letter8}>D</span>
            <span className={styleproducts.Letter9}>U</span>
            <span className={styleproducts.Letter10}>C</span>

            <span className={styleproducts.Letter11}>T</span>
            <span className={styleproducts.Letter12}>S</span>
            </div>
            
            </div>
            <Productsgrid />
            <div className={styleproducts.Last}>
            <div className={styleproducts.Content}>
            <h2> HOW DOES IT WORK ?</h2>
            <p>Browse our sites now and buy what you want in a shared basket </p>
            </div>
            </div>
            <div className={styleproducts.Steps}>
                <div>
                <FontAwesomeIcon className={styleproducts.Icon} icon={faShoppingBag}/>
                <span>step 1.</span>
                <span>Open any brand website</span>
                </div>
                <div>
                <FontAwesomeIcon className={styleproducts.Icon}icon={faCartPlus}/>
                <span>step 2.</span>
                <span>Add products to your cart</span>
                </div>
                <div>
                <FontAwesomeIcon className={styleproducts.Icon} icon={faCreditCard}/>
                <span>step 3.</span>
                <span>Pay and get your products</span>
                </div>

            </div>
        </div>
    )

}

export default product;