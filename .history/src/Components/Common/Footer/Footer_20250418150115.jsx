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
            
          
            
            <div className="footer-connect">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
                  <GrFacebookOption />
                </a>
                <a target="_blank" href="https://www.instagram.com/qubagardenrestaurant/?utm_source=qr#" aria-label="Instagram" className="social-icon">
                  <FaInstagram />
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
              © {currentYear} <span>Created by PM Systems</span>. {t("footer.allRightReserved")}
            </p>
            
        
            
            <p className="credits"></p>
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