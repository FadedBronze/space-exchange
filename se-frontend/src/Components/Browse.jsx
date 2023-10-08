/* eslint-disable react/prop-types */
import search from "../assets/search_black.svg";
import Logo from "../assets/Logo.png";
import { useSearch } from "../searchContext";
import { useState } from "react";

function Browse() {
  const { search } = useSearch();

  return (
    <>
      <div className="w-full flex h-screen">
        <Filters></Filters>
        <div
          className="bg-gray-950 w-full text-white encode h-full box-border p-5"
          style={{ lineHeight: 0.8 }}
        >
          <h2 className="text-[50px]">FIND YOUR IDEA</h2>
          <IdeaViewer></IdeaViewer>
        </div>
      </div>
      <div className="text-red-600">{search}</div>
    </>
  );
}

function IdeaViewer() {
  return <div></div>;
}

function Filters() {
  const { keywords, setKeywords, skills, setSkills } = useSearch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-gray-100 w-60 h-full box-border"
    >
      <div className="bg-gray-950 w-60 border-white border-8">
        <img src={Logo} />
      </div>
      <div className="p-2">
        <Search></Search>
        <MultiSelectDropdownMenu
          dropDowns={[
            "a house",
            "a mouse",
            "arouse",
            "a spouse",
            "a blouse",
            "about",
            "sellouts",
            "a pouch",
          ]}
          selected={keywords}
          setSelected={setKeywords}
          name="keywords"
        ></MultiSelectDropdownMenu>
        <MultiSelectDropdownMenu
          dropDowns={[
            "a house",
            "a mouse",
            "arouse",
            "a spouse",
            "a blouse",
            "about",
            "sellouts",
            "a pouch",
          ]}
          selected={skills}
          setSelected={setSkills}
          name="skills"
        ></MultiSelectDropdownMenu>
      </div>
    </form>
  );
}

function Search() {
  const { search: searchValue, setSearch } = useSearch();

  return (
    <div className="w-full relative">
      <input
        type="text"
        className="rounded-full w-full border border-black px-6 outline-none"
        defaultValue={searchValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(e.currentTarget.value);
          }
        }}
      />
      <img
        src={search}
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 left-1.5"
      />
    </div>
  );
}

function MultiSelectDropdownMenu(props) {
  const { dropDowns, selected, setSelected, name } = props;
  const [down, setDown] = useState();

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDown((down) => !down);
        }}
      >
        {down ? ">" : "^"} {name}
      </button>
      {down && (
        <div className="absolute top-15 left-0 w-40 bg-gray-200 rounded-lg p-4 z-20">
          {dropDowns.map((dropDown) => (
            <button
              className="border-b border-black block"
              key={dropDown}
              onClick={() => {
                setSelected((oldSelected) => {
                  const newSelected = [...oldSelected];

                  const existing = newSelected.findIndex(
                    (oldDropDown) => oldDropDown === dropDown
                  );

                  if (existing === -1) {
                    newSelected.push(dropDown);
                  } else {
                    newSelected.splice(existing, 1);
                  }

                  return newSelected;
                });
              }}
            >
              {dropDown} {selected.includes(dropDown) ? "✔" : ""}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;
