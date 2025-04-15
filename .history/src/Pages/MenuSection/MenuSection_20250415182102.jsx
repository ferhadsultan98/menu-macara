/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MenuSection.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/Loading/Loading";

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState([]);
  const [menuItems, setMenuItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const filterListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const { i18n, t } = useTranslation();


  // Fetch data from remote JSON
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://qrcodegenerateai.netlify.app/data.json"
        );
        const data = await res.json();
        // Store items with category keys normalized for filtering
        setMenuItems(
          data.menu.reduce((acc, cat) => {
            const categoryKey = cat.category.en.toLowerCase().replace(/\s+/g, "-");
            acc[categoryKey] = {
              items: cat.items,
              name: cat.category, // Store multilingual category names
            };
            return acc;
          }, {})
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Veri alınamadı:", error);
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Extract unique categories
  const categories = Object.keys(menuItems);

  useEffect(() => {
    let items = [];
    if (activeFilter === "all") {
      Object.keys(menuItems).forEach((category) => {
        items = [
          ...items,
          ...menuItems[category].items.map((item) => ({
            ...item,
            category: menuItems[category].name, // Use multilingual category object
          })),
        ];
      });
    } else if (menuItems[activeFilter]) {
      items = menuItems[activeFilter].items.map((item) => ({
        ...item,
        category: menuItems[activeFilter].name, // Use multilingual category object
      }));
    }

    setVisibleItems(items);
    setItemsToShow(6);
    setHasMore(items.length > 6);
  }, [activeFilter, menuItems]);

  useEffect(() => {
    const updateMetrics = () => {
      if (filterListRef.current) {
        const element = filterListRef.current;
        setMaxScroll(element.scrollWidth - element.clientWidth);
        setScrollPosition(element.scrollLeft);
      }
    };

    updateMetrics();
    scrollActiveFilterIntoView();

    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleScroll = (direction) => {
    if (!filterListRef.current) return;

    const element = filterListRef.current;
    const scrollAmount = element.clientWidth * 0.7;

    element.scrollBy({
      left: direction === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleFilterListScroll = () => {
    if (filterListRef.current) {
      setScrollPosition(filterListRef.current.scrollLeft);
      setMaxScroll(
        filterListRef.current.scrollWidth - filterListRef.current.clientWidth
      );
    }
  };

  const scrollActiveFilterIntoView = () => {
    if (!filterListRef.current) return;

    const activeButton = filterListRef.current.querySelector(
      ".menuFilterButtonActive"
    );
    if (activeButton) {
      const list = filterListRef.current;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const listWidth = list.clientWidth;

      const scrollTo = buttonLeft - listWidth / 2 + buttonWidth / 2;
      list.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const loadMore = () => {
    const newItemsToShow = itemsToShow + 6;
    setItemsToShow(newItemsToShow);
    setHasMore(visibleItems.length > newItemsToShow);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="menuSection" id="menu">
      <div className="container">
        <nav className="menuFilter">
          <div className="menuFilterContainer">
            <button
              className={`scrollButton scrollButtonPrev ${
                scrollPosition <= 0 ? "scrollButtonDisabled" : ""
              }`}
              onClick={() => handleScroll("prev")}
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <IoIosArrowBack fontSize="24px" />
            </button>

            <div
              className="menuFilterList"
              ref={filterListRef}
              onScroll={handleFilterListScroll}
            >
              <div className="menuFilterItem">
                <motion.button
                  className={`menuFilterButton ${
                    activeFilter === "all" ? "menuFilterButtonActive" : ""
                  }`}
                  onClick={() => handleFilterClick("all")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("all")} {/* Translate "All" if needed */}
                </motion.button>
              </div>

              {categories.map((category) => (
                <div key={category} className="menuFilterItem">
                  <motion.button
                    className={`menuFilterButton ${
                      activeFilter === category ? "menuFilterButtonActive" : ""
                    }`}
                    onClick={() => handleFilterClick(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {menuItems[category].name[i18n.language] ||
                      menuItems[category].name.en}
                  </motion.button>
                </div>
              ))}
            </div>

            <button
              className={`scrollButton scrollButtonNext ${
                scrollPosition >= maxScroll ? "scrollButtonDisabled" : ""
              }`}
              onClick={() => handleScroll("next")}
              disabled={scrollPosition >= maxScroll}
              aria-label="Scroll right"
            >
              <IoIosArrowForward fontSize="24px" />
            </button>
          </div>
        </nav>

        {isLoading ? (
          // <p>{t("loading")}</p> 
          <Loading/>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="menuGrid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {visibleItems.slice(0, itemsToShow).map((item) => (
                <motion.div
                  key={`${item.category.en}-${item.id}`}
                  className="menuItem"
                  variants={itemVariants}
                >
                  <div className="menuItemCard">
                    <div className="menuItemImage">
                      <img
                        src={item.image_url}
                        alt={item.name[i18n.language] || item.name.en}
                      />
                      <div className="menuItemCategoryBadge">
                        {item.category[i18n.language] || item.category.en}
                      </div>
                    </div>
                    <div className="menuItemContent">
                      <h4 className="menuItemTitle">
                        {item.name[i18n.language] || item.name.en}
                      </h4>
                      <p className="menuItemDescription">
                        {item.description[i18n.language] || item.description.en}
                      </p>
                      <div className="menuItemFooter">
                        <span className="menuItemPrice">{item.price}₼</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {hasMore && !isLoading && (
          <div className="menuLoadMore">
            <motion.button
              className="loadMoreButton"
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("menu.loadMore")}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;