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
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();
  const i18nextLng = localStorage.getItem("i18nextLng");

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
              <img
                src={logo}
                alt="Guba Garden Restaurant Logo"
                className="footer-logo"
              />
              {i18nextLng === "az" ? (
                <p className="footer-description">
                  Quba Garden, 2010-cu ildən bəri yerli və beynəlxalq mətbəxin
                  seçilmiş dadlarını bir araya gətirərək qonaqlarına yüksək
                  səviyyəli xidmət təqdim edir. Burada siz həm Azərbaycan
                  mətbəxinin sevilən yeməklərini, həm də fərqli ölkələrin dadlı
                  nümunələrini təbiət mənzərəsi fonunda dada bilərsiniz.
                </p>
              ) : i18nextLng === "en" ? (
                <p className="footer-description">
                  Since 2010, Quba Garden has brought together selected tastes
                  from local and international cuisine, delivering top-level
                  service to its guests. Here, you can enjoy both beloved
                  Azerbaijani dishes and international delicacies while
                  surrounded by beautiful natural scenery.
                </p>
              ) : (
                <p className="footer-description">
                  С 2010 года Quba Garden объединяет лучшие вкусы местной и
                  мировой кухни, предлагая гостям обслуживание на высоком
                  уровне. Здесь вы можете насладиться любимыми блюдами
                  азербайджанской кухни и кулинарными изюминками разных стран на
                  фоне живописной природы.
                </p>
              )}

              <div className="footer-contact-items">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>{t("footer.location")}</span>
                </div>
                <div className="contact-item">
                  <FaPhoneAlt />
                  <span>+994 55 280 50 00</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>sales@macaraclub.az</span>
                </div>
                <div className="contact-item">
                  <FaClock />
                  <span>12:00-22:00</span>
                </div>
              </div>
            </div>

            <div className="footer-connect">
              <h4> {t("footer.connectWithUs")}</h4>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="social-icon"
                >
                  <GrFacebookOption />
                </a>
                <a
                  href="https://www.instagram.com/qubagardenrestaurant/?utm_source=qr#"
                  aria-label="Instagram"
                  target="_blank"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="footer-actions">
                <a
                  href="https://maps.app.goo.gl/35UcEZzbX2nMFG9H6"
                  className="footer-btn map-btn"
                  target="_blank"
                >
                  {t("footer.viewMap")}
                </a>
                <a
                  href="https://macaraclub.az/"
                  className="footer-btn book-btn"
                  target="_blank"
                >
                  {t("footer.bookaTable")}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} <span>Created by PM Systems</span>.{" "}
              {t("footer.allRightReserved")}
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
