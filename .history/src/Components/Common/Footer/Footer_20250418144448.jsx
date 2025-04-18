import React, { useState, useEffect } from "react";
import "./Footer.scss";
import logo from "../../../assets/logowhite.png";
import visaIcon from "../../../assets/visa.png";
import mastercardIcon from "../../../assets/mastercard.png";
import { IoIosArrowUp } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,112C672,96,768,64,864,80C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-info">
              <img src={logo} alt="Guba Garden Restaurant Logo" className="footer-logo" />
              <p className="footer-description">{t("footer.desc")}</p>
              <div className="footer-contact-items">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>{t("footer.location")}</span>
                </div>
                <div className="contact-item">
                  <FaPhoneAlt />
                  <span>+994 55 333 94 92</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>sales@macaraclub.az</span>
                </div>
                <div className="contact-item">
                  <FaClock />
                  <span>12:00 - 22:00</span>
                </div>
              </div>
            </div>
            
            <div className="footer-quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-connect">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
                  <GrFacebookOption />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" aria-label="TikTok" className="social-icon">
                  <FaTiktok />
                </a>
              </div>
              
              <div className="footer-actions">
                <a href="https://maps.app.goo.gl/35UcEZzbX2nMFG9H6" className="footer-btn map-btn" target="_blank">
                  {t("footer.viewMap")}
                </a>
                <a href="https://macaraclub.az/" className="footer-btn book-btn" target="_blank">
                  {t("footer.bookaTable")}
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} <span>Guba Garden Restaurant</span>. {t("footer.allRightReserved")}
            </p>
            
            <div className="payment-methods">
              <span>Payment Methods:</span>
              <img src={visaIcon} alt="Visa" />
              <img src={mastercardIcon} alt="Mastercard" />
            </div>
            
            <p className="credits">Created by PM Systems</p>
          </div>
        </div>
      </div>
      
      <div
        className={`scroll-top ${showScrollTop ? "visible pulse" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </div>
    </footer>
  );
};

export default Footer;