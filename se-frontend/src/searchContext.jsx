/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const searchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(searchContext);

export function SearchContextProvider(props) {
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <searchContext.Provider
      value={{ setSearch, search, keywords, setKeywords, skills, setSkills }}
    >
      {props.children}
    </searchContext.Provider>
  );
}
