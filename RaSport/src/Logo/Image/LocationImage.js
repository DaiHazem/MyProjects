import React from "react";
import locationImage from "../../assets/assets/Location/map.PNG";
import stylelocation from "./LocationImage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

const mapImage=(props)=>{
  const dropdownMenu=[
    {
      gov:"Alexandria",
      store1:"Agmy Store",
      store2:"Alexandria Mall",
      store3:"Mall of Arabia"
    },
     { gov:"Cairo",
      store1:"New Cairo Store",
      store2:"Maadi Store",
      store3:"Mokattam Store"
  },
  {
      gov:"Giza",
      store1:"Tahrir Store",
      store2:" Mohandesein Store",
      store3:"October Store"
  }


  ];

  const dropdownOutput=dropdownMenu.map(el=>{
    return( <div key={el.gov} className={stylelocation.Dropdown}>
      <button className={stylelocation.Dropbtn}>
        {el.gov}
        <i className={stylelocation.Down}>&#9660;</i>
      </button>
      <div className={stylelocation.Content}>
      <a href="#link1">{el.store1}</a>
     <a href="#link2">{el.store2}</a>
     <a href="#link3">{el.store3}</a>
      </div>
    </div>
             

    )
  })
    return(
        <div className={stylelocation.Map}>
            <div className={stylelocation.Header}>
                <h4>GO TO  <span>STORE</span> FROM <span>YOUR HOME</span> </h4>
                  {dropdownOutput}
               
            </div>
            <img src={locationImage} alt="location"/>
            <div className={stylelocation.Side}>
            <FontAwesomeIcon icon={faMapPin} className={stylelocation.Icon}/>
                <br/>
                Tahrir Branch
                <button className={stylelocation.Button}>LET'S SHOP</button>
            </div>
        </div>
    )

}

export default mapImage;