import React, { useState,useEffect } from 'react'
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);
  // const hoverHandler = (type) => {
  //   setHowerState(type);
  // };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload()
    } 
  };

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));

    if (data) setLogin(true);
  }, []);
  return (
    <>
      <div className="container">
        <div className="card">
          <div>
            <img
              style={{cursor:"pointer"}}
              onClick={()=>navigate("/")}
              src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
              className="card4"
              alt="nykka"
            />
            <p>Categories</p>
            <p>Brands</p>
            <p>Luxe</p>
            <p>Nykaa Fashion</p>
            <p>Beauty Advice</p>
          </div>
          <div>
            <div className="inputContainer">
              <input
                style={{position: "relative"}}
                type="text"
                className="input"
                placeholder="Search on Nykaa"
              />
            </div>
            <div className="card2">
              <p>
              </p>
              <p className='useLoginBtn'>Sign in</p>
            </div>
            <div className="card3">
              
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
