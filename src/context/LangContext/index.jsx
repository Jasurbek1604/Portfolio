import { createContext, useContext, useState } from "react";
import { navbarEn, navbarUz, navbarRu } from "../../utils/navabr";

const LangContext = createContext();

export const useLangContext = () => useContext(LangContext);

const LangProvider = ({ children }) => {
  const getLanguage = (prop) => {
    const obj = {
      en: navbarEn,
      uz: navbarUz,
      ru: navbarRu,
    };
    return obj[prop] || obj["en"];
  };

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const data = getLanguage(language);
  return (
    <LangContext.Provider value={[data, language, setLanguage]}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
