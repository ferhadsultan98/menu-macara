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
                  Quba Garden – ənənə və yeniliyin bir arada olduğu, milli
                  ləzzətləri və dünya mətbəxindən seçilmiş yeməkləri zövqlə
                  təqdim edən bir məkandır. Fəaliyyət göstərdiyimiz ilk gündən
                  etibarən məqsədimiz hər qonağa həm dad, həm də rahatlıq
                  baxımından yaddaqalan bir təcrübə yaşatmaq olub. Yeməklərimiz
                  yerli və mövsümi məhsullardan hazırlanır. Aşpazlarımız həm
                  Azərbaycan mətbəxinin klassiklərini – qutab, dolma, kabab və
                  s. – həm də müxtəlif ölkələrin dadlı yeməklərini özəl
                  üsullarla təqdim edirlər. Restoranımızın interyeri təbiətə
                  açılan geniş sahələri, sakit və rahat atmosferi ilə həm fərdi,
                  həm ailəvi, həm də işgüzar görüşlər üçün əlverişlidir.
                </p>
              ) : i18nextLng === "en" ? (
                <p className="footer-description">
                Since 2010, Quba Garden has brought together selected tastes from local and international cuisine, delivering top-level service to its guests.
Here, you can enjoy both beloved Azerbaijani dishes and international delicacies while surrounded by beautiful natural scenery.

                </p>
              ) : (
                <p className="footer-description">
                  Quba Garden — это место, где традиции встречаются с
                  современностью, а блюда национальной и мировой кухни подаются
                  со вкусом и заботой о деталях. С первого дня нашей
                  деятельности мы стремимся подарить каждому гостю незабываемые
                  впечатления — как вкусовые, так и в плане комфорта. Наши блюда
                  готовятся из местных и сезонных ингредиентов. Наши повара
                  предлагают как классические блюда азербайджанской кухни —
                  кутабы, долма, кебаб и др., так и изысканные блюда разных
                  стран в авторской интерпретации. Интерьер ресторана с
                  просторными зонами, открывающимися к природе, и уютной
                  атмосферой идеально подходит для индивидуального отдыха,
                  семейных ужинов и деловых встреч.
                </p>
              )}

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
