import React, { useRef } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./Languages/i18n";
import "./App.scss";
import MainLayout from "./Components/Common/MainLayout";
import Home from "./Pages/Home/Home";
import MenuSection from "./Pages/MenuSection/MenuSection";

function App() {
  const menuSectionRef = useRef(null);

  const scrollToMenu = () => {
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <I18nextProvider i18n={i18n}>
      <div className="app-container">
        <MainLayout>
          <Home/>
          <MenuSection />
        </MainLayout>
      </div>
    </I18nextProvider>
  );
}

export default App;
