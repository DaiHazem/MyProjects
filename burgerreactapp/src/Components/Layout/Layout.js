import React ,{useState} from "react";
import Aux from "../../hoc/Auxiliary";
import styleLayout from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/SideDrawer/SideDrawer";
import {connect} from "react-redux";


const layout=(props)=>{

 const [sidebarIsVisible,setSidebar]=useState(false);

   const  closeSideDrawer=()=>{
      setSidebar(false);
    }
    const openSideDrawer=()=>{
    setSidebar(! sidebarIsVisible);
    }
   
        return (
            <Aux>
          <Toolbar  isauthenticate={props.isAuth} click={openSideDrawer}/>
          <Sidedrawer isauthenticate={props.isAuth}
          show={sidebarIsVisible} cancelled={closeSideDrawer}/>
          <main className={styleLayout.main}>{props.children}</main>

    </Aux>

        )
    }

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.token !== null
    }

}
export default connect(mapStateToProps)(layout);
