import React ,{useState, useEffect}from "react";
import Drawertoggle from "../Drawertoggle/Drawertoggle";
import Navigationitems from "../Navigationitems/Navigationitems";
import styletoolbar from "./ToolBar.css";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const toolbar =(props)=>{
const [scroll,setScrolled]=useState(false);
useEffect(()=>{
    window.addEventListener("scroll",pageScrolled);

})

const pageScrolled=()=>{
    if(window.pageYOffset > 0){
        setScrolled(true);
    }else{
        setScrolled(false);
    }
}
//console.log(window.pageYOffset);
    let styleclasses=[styletoolbar.Toolbar];
    if(scroll){
        styleclasses =[styletoolbar.Scrolled]
    }
    return(
        <header className={styleclasses}> 
        <Drawertoggle dashbarclicked={props.click}/>
           <div className={styletoolbar.Icon}>
               <Logo className={styletoolbar.Logo}/>
            <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
            <nav className={styletoolbar.Desktoponly}>     
             <Navigationitems/>    
            </nav>
            <button className={styletoolbar.Button}>Login</button>    

        
        </header>
    )

}


export default toolbar;