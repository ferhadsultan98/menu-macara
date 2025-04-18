import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { FaUtensils } from "react-icons/fa";

const Home = ({ scrollToMenu }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
            {t("home.subtitle")}
          </motion.span>
          <motion.h1
            className="heroTitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t("home.header")}
          </motion.h1>
          <div className="separator">
            <span></span>
            <i><FaUtensils /></i>
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
            <motion.button
              className="menuButton"
              onClick={scrollToMenu}
              whileHover={{ scale: 1.05, backgroundColor: "#c9a552" }}
              whileTap={{ scale: 0.98 }}
            >
              {t("home.exploreMenu")}
            </motion.button>

            <a href="https://macaraclub.az/" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="reserveButton"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
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
    </section>
  );
};

export default Home;
