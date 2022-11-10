import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className='footer-div'>
      <div className='footer-div-1'>
        <h1>Want style Idea and Treats?</h1>
        <div className='mail-div'>
          <input type="email" placeholder='Enter Email * ' />
          <button>Subscribe</button>
        </div> 
      </div>
      <div>
        <div>
          <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png" alt="Image not found" />
        </div>
        <div>
          <h3>SUPPORT</h3>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3>SHOP</h3>
          <p>My Account</p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <p>Shipping & Returns</p>
          <p>privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Customer Care</p>
          <p>Contact Support Available</p>
          <p>Mon To Sat : 10:00 Am to 6:00Pm</p>
          <p>E-mail</p>
          <p>royalmart@gmail.com</p>
          <p>Mobile</p>
          <p>+91 87960 67458</p>
          <p>+91 92642 18989</p>
        </div>
      </div>
      <div>
        <p>© 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
    </>
  )
}

export default Footer;
