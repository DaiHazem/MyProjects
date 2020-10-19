import React ,{ useState} from "react";
import Aux from "../hoc/Auxiliary";
import Toolbar from "../ToolBar/ToolBar";
import Sidedrawer from "../Drawertoggle/Sidedrawer/Sidedrawer";
import stylelayout from "./Layout.css";

const layout=(props)=>{
    const [isSidebarVisible, setSidebar]=useState(false);

    const openSidebar=()=>{
        setSidebar(!isSidebarVisible);
    }

    const closeSidebar=()=>{
        setSidebar(false);
    }

    return(
    <Aux>
        <Toolbar click={openSidebar}/>
        <Sidedrawer cancelled={closeSidebar} 
          show={isSidebarVisible} />
          <main className={stylelayout.Main}>{props.children}</main>
    </Aux>
)
}

export default layout;
 