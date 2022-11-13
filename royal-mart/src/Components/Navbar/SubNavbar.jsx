import React, { useState } from 'react'
// import styled from 'styled-components'
// import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
import "./SubNav.css";
import {useNavigate} from 'react-router-dom';

const SubNavbar = () => {
   const navigate= useNavigate()
   const [howerState, setHowerState] = useState("");

    const hoverHandler = (type) => {
        setHowerState(type)
    }
    
    const handleNoHover = () => {
      setHowerState("")
    }
    return (
        <>
            <div className='Subnav'>
                {/* <p onClick={()=>navigate("/face")} onMouseOver={() => hoverHandler('MAKEUP')}>Makeup </p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('SKIN')}>Skin</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('HAIR')}>Hair</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('APPLIANCES')}>Appliances</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('BATH&BODY')}>Bath & Body</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('NATURAL')}>Natural</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('MOM&BABY')}>Mom & Baby</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('HEALTH')}>Health & Wellness</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('MEN')}>Men</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('FRAGRENCE')}>Fragrance</p>
                <p onClick={()=>navigate("/face")} onMouseEnter={() => hoverHandler('POPUPS')}>Pop Ups</p> */}

                <p>Makeup </p>
                <p>Skin</p>
                <p>Hair</p>
                <p>Appliances</p>
                <p>Bath & Body</p>
                <p>Natural</p>
                <p>Mom & Baby</p>
                <p>Health & Wellness</p>
                <p>Men</p>
                <p>Fragranc</p>
                <p>Pop Ups</p>
            </div>
            {/* <div className='conten'>
                <div onMouseLeave={handleNoHover}>
                    {howerState  && type={howerState}}
                </div>
            </div> */}
        </>
    )
}

export default SubNavbar;