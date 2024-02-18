import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
<div className='footer'>

    <div className="box">
        <div className="boxes">
            <i className="fa-solid fa-lock"></i>
            <h4>100% SECURE PAYMENTS</h4>
            <p>Moving you card details to a much more</p><p> secured place</p>
        </div>
        <div className="boxes">
            <i className="fa-solid fa-shield-halved"></i>
            <h4>TRUSTPAY</h4>
            <p>100% Payment Protection. Easy </p><p>Return Policy</p>
        </div>
        <div className="boxes">
            <i className="fa-solid fa-handshake-angle"></i>
            <h4>HELP CENTER</h4>
            <p>Got a question? Look no further. </p><p>Browse our FAQs or submit your query here</p>
        </div>
        <div className="boxes">
            <i className="fa-solid fa-mobile-screen"></i>
            <h4>SHOP ON THE GO</h4>
            <p>Download the app and get exciting </p><p>app only offers at your fingertips</p>
        </div>
    </div> 
    
    <div className="details">
        <div className="info">
            <h6>POLICY INFO</h6>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuses & Takedown Policy</p>
            <p>Know Your BIS Standard</p>
            <p>Products Under Cumpulsory BIS</p>
            <p>Certificaton</p>
            <p>FAQ</p>
        </div>
        <div className="info">
            <h6>COMPANY</h6>
            <p>Impact@Snapdeal</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Sitemap</p>
            <p>Contact Us</p>
        </div>
        <div className="info">
            <h6>SNAPDEAL BUISNESS</h6>
            <p>Shopping App</p>
            <p>Sell on Snapdeal</p>
            <p>Media Enquiries</p>
        </div>
        <div className="info">
            <h6>POPULAR LINKS</h6>
            <p>Lehenga</p>
            <p>Kid's Cloting</p>
            <p>Sarees</p>
            <p>Winter Wear</p>
        </div>
        <div className="info">
            <h6>SUBSCRIBE</h6>
            <div className="insert">
            <input type="text" placeholder='Your email address' />
            <button>SUBSCRIBE</button>
            </div>
            <p>Register now to get updates on promotions and </p><p>coupons. <span>Or Download App</span></p>
        </div>
    </div>

    <div className="icon-set">
        <div className="payment">
            <p>PAYMENT</p>
            <div className="icons">
                <i className="fa-solid fa-money-bill" style={{color: '#002b75'}}></i>
                <i className="fa-solid fa-credit-card" style={{color: '#eb0000'}}></i>
                <i className="fa-solid fa-money-check-dollar" style={{color: '#74C0FC'}}></i>
                <i className="fa-brands fa-cc-visa" ></i>
                <i className="fa-brands fa-cc-mastercard" style={{color: '#1c3e78'}}></i>
            </div>
        </div>
        <div className="connect">
            <p>CONNECT</p>
            <div className='icons'>
                <i className="fa-brands fa-facebook" style={{color: '#002b75'}}></i>
                <i className="fa-brands fa-twitter" style={{color: '#74C0FC'}}></i>
                <i className="fa-brands fa-linkedin" style={{color: '#1c3e78'}}></i>
                <i className="fa-brands fa-square-youtube" style={{color: '#eb0000'}}></i>
                <i className="fa-brands fa-telegram" style={{color: '#74C0FC'}}></i>
                <i className="fa-brands fa-square-whatsapp" style={{color: '#13aa08'}}></i>
            </div>
        </div>
    </div>

        <div className="copy">
            <p>Copyright &#169; 2021, Snapdeal Limited. All Rights Reserved</p>
            <p>Made for Bharat<i className="fa-solid fa-heart fa-beat" style={{color: '#fd4b4b'}}></i></p>
        </div>

</div>
  )
}

export default Footer;
