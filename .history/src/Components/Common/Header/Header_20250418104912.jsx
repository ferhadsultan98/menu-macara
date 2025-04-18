import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Header.scss";
import Logo from "../../../assets/logo.png";
import whiteLogo from "../../../assets/logowhite.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: "en", name: "English" },
    { code: "az", name: "Azərbaycan" },
    { code: "ru", name: "Русский" },
  ];
  
  const navItems = [
    { id: "menu", label: "Menu" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="headerContainer">
        <a href="/">
          <div className="logo">
            <img
              src={scrolled ? Logo : whiteLogo}
              alt={scrolled ? "Logo" : "White Logo"}
              className="logo-img"
            />
          </div>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                >
                  {t(`navigation.${item.id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-dropdown" ref={dropdownRef}>
            <button
              className="lang-current"
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              <span>{i18n.language.toUpperCase()}</span>
              <i className={`fas fa-chevron-down ${isOpen ? "open" : ""}`}></i>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className="lang-options"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <motion.li
                      key={lang.code}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                      onClick={() => toggleLanguage(lang.code)}
                      className={i18n.language === lang.code ? "active" : ""}
                    >
                      <span className="lang-code">
                        {lang.code.toUpperCase()}
                      </span>
                      <span className="lang-name">{lang.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="mobile-nav-link"
                    activeClass="active"
                    onClick={closeMobileMenu}
                  >
                    {t(`navigation.${item.id}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;