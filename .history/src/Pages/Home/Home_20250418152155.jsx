/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { FaUtensils } from "react-icons/fa";

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentFont = localStorage.getItem("font");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
console.log("dil", )

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="homePage">
      <section className="heroSection">
        <div className="heroBackground">
          <div className="overlay"></div>
        </div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="heroSubtitle"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Guba Garden
          </motion.span>
          <motion.h1
            className="heroTitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t("home.header")}
          </motion.h1>
          <div className="separator">
            <span></span>
            <i>
              <FaUtensils />
            </i>

            <span></span>
          </div>
          <motion.p
            className="heroDescription"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t("home.title")}
          </motion.p>
          <motion.div
            className="buttonGroup"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href="https://macaraclub.az/" target="_blank">
              <motion.button
                className="reserveButton"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t("home.reservation")}
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        <div className="scrollIndicator">
          <motion.div
            className="mouseIcon"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </div>
      </section>

      <section className="aboutSection">
        <div className="container">
          <div className="sectionHeader">
            <motion.span
              className="sectionSubtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("home.about")}
            </motion.span>
            <motion.h2
              className="sectionTitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("home.mainheader")}
            </motion.h2>
            <div className="separator">
              <span></span>
              <i className="fas fa-leaf"></i>
              <span></span>
            </div>
          </div>

          <div className="aboutContent">
            <motion.div
              className="aboutImage"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="imageFrame">
                <div className="decorativeCorner cornerTopLeft"></div>
                <div className="decorativeCorner cornerTopRight"></div>
                <div className="decorativeCorner cornerBottomLeft"></div>
                <div className="decorativeCorner cornerBottomRight"></div>
              </div>
            </motion.div>

            <motion.div
              className="aboutText"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>{t("home.twoheader")}</h3>
              <p>{}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
