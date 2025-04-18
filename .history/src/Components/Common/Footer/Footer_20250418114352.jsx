import React, { useState, useEffect } from "react";
import "./Footer.scss";
import logo from "../../../assets/logowhite.png";
import visaIcon from "../../../assets/visa.png";
import mastercardIcon from "../../../assets/mastercard.png";
import { IoIosArrowUp } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaTiktok } from "react-icons/fa";
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
      <div className="container">
        <div className="footerTop">
          <div className="footerGrid">
            <div className="footerBrand">
              <img
                src={logo}
                alt="Guba Garden Restaurant Logo"
                className="footerLogo"
              />
              <p className="footerDescription">{t("footer.desc")}</p>
              <div className="footerSocial">
                <a href="https://facebook.com" aria-label="Facebook">
                  <i>
                    {" "}
                    <GrFacebookOption />
                  </i>
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <i>
                    {" "}
                    <FaInstagram />
                  </i>
                </a>
                <a href="https://tiktok.com" aria-label="TikTok">
                  <i>
                    {" "}
                    <FaTiktok />
                  </i>
                </a>
              </div>
            </div>

            <div className="footerContact">
              <h4 className="footerContactTitle">Contact Us</h4>
              <ul className="footerContactList">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{t("footer.location")}</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>+994 55 333 94 92</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>sales@macaraclub.az</span>
                </li>
              </ul>
              <a href="https://maps.app.goo.gl/35UcEZzbX2nMFG9H6" className="footerContactLink" target="_blank">
                {t("footer.viewMap")}
              </a>
            </div>

            <div className="footerHours">
              <h4 className="footerHoursTitle">{t("footer.openHours")}</h4>
              <p className="footerHoursText">12:00 - 22:00</p>
              <a href="https://macaraclub.az/" className="footerHoursLink" target="_blank">
                {t("footer.bookaTable")}
              </a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopyright">
            © {currentYear} <span>Guba Garden Restaurant</span>.{" "}
            {t("footer.allRightReserved")} Created by PM Systems
          </p>

          <div className="footerPayment">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
          </div>

          <div
            className={`footerScrollTop ${showScrollTop ? "show bounce" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <IoIosArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
