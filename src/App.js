import "./App.css";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import GoogleTranslate from "./Components/GoogleTranslate/GoogleTranslate";
// Contains the value and text for the options
// const languages = [
//   { value: "", text: "Options" },
//   { value: "en", text: "English" },
//   { value: "hi", text: "Hindi" },
//   { value: "ml", text: "Malayalam" },
//   { value: "ar", text: "Arabic" },
// ];

function App() {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  // const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  // const handleChange = (e) => {
  //   setLang(e.target.value);
  //   let loc = "http://localhost:3000/";
  //   window.location.replace(loc + "?lng=" + e.target.value);
  // };

  return (
    <div className="App">

      {/* <div className="translator"> */}
      {/* <h1>{t("welcome")}</h1>
        <label>{t("choose")}</label>
        <select value={lang} onChange={handleChange}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div> */}
      <Navbar />
      <Breadcrum />
      <Products />
      <Footer />
      {/* {t("welcome")} */}
    </div>
  );
}

export default App;
