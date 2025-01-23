import React from 'react';
import './components.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section about">
          <h3>Basket</h3>
          <p>Your one-stop shop for the best deals and latest products.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@basket.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 E-Commerce St, Shopping City</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com"  >Facebook</a>
            <a href="https://twitter.com" >Twitter</a>
            <a href="https://instagram.com"  >Instagram</a>
          </div>
        </div>

        
        <div className="footer-section newsletter">
          <h4>Subscribe to our channel</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>

     
      
    </footer>
  );
};

export default Footer;