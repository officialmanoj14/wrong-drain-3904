import React from 'react';
import Home from "./Home.jsx"
import Footer from '../Footer/Footer';
import MainNav from '../Navbar/MainNav';



const LandingPage = () => {
  return (
    <div>
      <MainNav/>
      <Home/>
      <Footer/>
    </div>

  )
}

export default LandingPage;
