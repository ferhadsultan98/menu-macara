import React, { useState, useEffect } from "react";
import "./Footer.scss";
import logo from "../../../assets/logowhite.png";
import visaIcon from "../../../assets/visa.png";
import mastercardIcon from "../../../assets/mastercard.png";
import { IoIosArrowUp } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import {
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLeaf,
  FaUtensils,
  FaWineGlassAlt,
  FaClock
} from "react-icons/fa";
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
      <div className="footer-top-decoration"></div>
      
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column footer-about">
            <img
              src={logo}
              alt="Guba Garden Restaurant Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">Authentic Cuisine • Unforgettable Experience</p>
            <p className="footer-description">{t("footer.desc")}</p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="social-icon"
              >
                <GrFacebookOption />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="social-icon"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="footer-column footer-hours">
            <h3 className="footer-heading">
              <FaClock className="heading-icon" />
              {t("footer.openHours")}
            </h3>
            <div className="hours-container">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">12:00 - 22:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday - Sunday</span>
                <span className="time">12:00 - 23:00</span>
              </div>
            </div>
            <a
              href="https://macaraclub.az/"
              className="footer-button reservation-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUtensils className="btn-icon" />
              {t("footer.bookaTable")}
            </a>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-heading">
              <FaEnvelope className="heading-icon" />
              {t("footer.contactUs")}
            </h3>
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
            <a
              href="https://maps.app.goo.gl/35UcEZzbX2nMFG9H6"
              className="footer-button map-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="btn-icon" />
              {t("footer.viewMap")}
            </a>
          </div>

          <div className="footer-column footer-menu">
            <h3 className="footer-heading">
              <FaLeaf className="heading-icon" />
              {t("footer.quickLinks")}
            </h3>
            <ul className="menu-list">
              <li><a href="/menu">{t("footer.ourMenu")}</a></li>
              <li><a href="/about">{t("footer.aboutUs")}</a></li>
              <li><a href="/events">{t("footer.events")}</a></li>
              <li><a href="/gallery">{t("footer.gallery")}</a></li>
              <li><a href="/contact">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <FaWineGlassAlt className="newsletter-icon" />
            <h3>{t("footer.stayUpdated")}</h3>
            <p>{t("footer.newsletterDesc")}</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder={t("footer.emailPlaceholder")} required />
            <button type="submit">{t("footer.subscribe")}</button>
          </form>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} <span className="highlight">Guba Garden</span> • {t("footer.allRightReserved")}
          </p>
          <div className="payment-methods">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
          </div>
          <div className="creator">
            <span>Created by</span>
            <a href="https://pmsystems.az" target="_blank" rel="noopener noreferrer">PM Systems</a>
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