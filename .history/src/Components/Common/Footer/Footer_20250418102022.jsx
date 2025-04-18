import React, { useState, useEffect } from "react";
import "./Footer.scss";
import logo from "../../../assets/logowhite.png";
import visaIcon from "../../../assets/visa.png";
import mastercardIcon from "../../../assets/mastercard.png";
import { IoIosArrowUp } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-about">
            <img src={logo} alt="Guba Garden Restaurant Logo" className="footer-logo" />
            <p className="footer-description">{t("footer.desc")}</p>
            <div className="footer-social">
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
          </div>

          <div className="footer-info">
            <div className="footer-contact">
              <h3 className="footer-heading">{t("footer.contactUs")}</h3>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{t("footer.location")}</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <span>+994 55 333 94 92</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>sales@macaraclub.az</span>
                </li>
              </ul>
              <a href="https://maps.app.goo.gl/35UcEZzbX2nMFG9H6" className="footer-button" target="_blank" rel="noopener noreferrer">
                {t("footer.viewMap")}
              </a>
            </div>

            <div className="footer-hours">
              <h3 className="footer-heading">{t("footer.openHours")}</h3>
              <div className="hours-container">
                <div className="hours-item">
                  <span className="day">{t("footer.weekdays")}</span>
                  <span className="time">12:00 - 22:00</span>
                </div>
                <div className="hours-item">
                  <span className="day">{t("footer.weekends")}</span>
                  <span className="time">12:00 - 23:00</span>
                </div>
              </div>
              <a href="https://macaraclub.az/" className="footer-button" target="_blank" rel="noopener noreferrer">
                {t("footer.bookaTable")}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} <span className="highlight">Guba Garden</span> • {t("footer.allRightReserved")}
          </p>
          <div className="creator">Created by PM Systems</div>
          <div className="payment-methods">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
          </div>
        </div>
      </div>

      <button 
        className={`scroll-top ${showScrollTop ? "visible" : ""}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    </footer>
  );
};

export default Footer;