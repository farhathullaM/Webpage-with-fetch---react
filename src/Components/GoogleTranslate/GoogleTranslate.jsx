import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        // Ensure googleTranslateElementInit is defined before calling it
        if (window.google.translate.TranslateElement) {
          window.googleTranslateElementInit();
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleTranslate();

    // Cleanup function
    return () => {
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      if (translateElement) {
        translateElement.remove();
      }
    };
  }, []);

  return (
    <div id="google_translate_element">
      Translate this page in your preferred language:
    </div>
  );
};

export default GoogleTranslate;
