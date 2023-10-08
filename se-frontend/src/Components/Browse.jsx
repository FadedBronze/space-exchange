/* eslint-disable react/prop-types */
import search from "../assets/search_black.svg";
import Logo from "../assets/Logo.png";
import { useSearch } from "../searchContext";
import { useEffect, useState } from "react";
import axios from "../axios";

function Browse() {
  return (
    <div className="w-full flex h-screen">
      <FiltersDrawer></FiltersDrawer>
      <div
        className="bg-gray-950 w-full text-white encode h-full box-border p-5 flex flex-col"
        style={{ lineHeight: 0.8 }}
      >
        <h2 className="text-[50px] pb-5">FIND YOUR IDEA</h2>
        <IdeaViewer></IdeaViewer>
      </div>
    </div>
  );
}

function FiltersDrawer() {
  const [filtersOut, setFiltersOut] = useState();

  return (
    <>
      {filtersOut && (
        <div className="w-60 h-full">
          <div className="w-60 relative h-full">
            <Filters></Filters>
            <button
              onClick={() => {
                setFiltersOut((f) => !f);
              }}
              className="w-7 h-7 -right-9 bottom-2 absolute bg-white rounded-full"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
      {!filtersOut && (
        <div className="w-60 h-full left-0 absolute -translate-x-full">
          <div className="w-60 relative h-full">
            <Filters></Filters>
            <button
              onClick={() => {
                setFiltersOut((f) => !f);
              }}
              className="w-7 h-7 -right-9 bottom-2 absolute bg-white rounded-full"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Idea(props) {
  return (
    <div
      key={props.title + props.categories}
      className="w-80 flex flex-col h-[300px] gap-3"
    >
      <div
        className="relative h-1/2 flex-shrink-0 cursor-pointer"
        onClick={() => {}}
      >
        <img
          className="absolute object-cover object-center w-full h-full left-0 right-0"
          src={props.src}
        />
        <h5 className="text-md p-2 relative z-20 font-bold">{props.title}</h5>
      </div>
      <div className="h-1/2 flex-shrink-0 flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <span>{props.publisher}</span>
          <span>{props.published}</span>
        </div>
        <div className="flex gap-5 justify-between">
          <div>
            <span className="text-md">Categories:</span>
            <div>
              {props.categories.map((category) => (
                <div className="text-[12px]" key={category}>
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <span className="text-md">Skills:</span>
            <div>
              {props.skills.map((skill) => (
                <div className="text-[12px]" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IdeaViewer() {
  const { search, keywords, skills } = useSearch();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/home").then((ideas) => {
      setData(ideas);
    });
  }, []);

  const dummyData = [
    {
      published: "2023-01-15",
      publisher: "Research Institute A",
      title: "Exploring Sustainable Agriculture Practices",
      skills: [
        "Data Analysis",
        "Environmental Science",
        "Agricultural Economics",
      ],
      categories: ["Agriculture", "Sustainability"],
    },
    {
      published: "2023-02-10",
      publisher: "University X",
      title: "Mapping Biodiversity in Urban Areas",
      skills: ["GIS", "Ecology", "Data Collection"],
      categories: ["Ecology", "Biodiversity"],
    },
    {
      published: "2023-03-05",
      publisher: "Scientific Society Y",
      title: "Analyzing Climate Change Impacts on Wildlife Migration",
      skills: ["Climate Science", "Wildlife Biology", "Data Modeling"],
      categories: ["Climate Change", "Wildlife"],
    },
    {
      published: "2023-04-20",
      publisher: "Environmental NGO Z",
      title: "Assessing Air Quality in Urban Environments",
      skills: [
        "Air Quality Monitoring",
        "Data Visualization",
        "Environmental Health",
      ],
      categories: ["Environmental Health", "Air Quality"],
    },
    {
      published: "2023-05-12",
      publisher: "Research Institute B",
      title: "Investigating the Microbiome of Coral Reefs",
      skills: ["Marine Biology", "Microbiology", "DNA Sequencing"],
      categories: ["Marine Science", "Microbiology"],
    },
    {
      published: "2023-06-08",
      publisher: "Academic Institution C",
      title: "Studying the Effects of Social Media on Mental Health",
      skills: ["Psychology", "Data Analysis", "Survey Design"],
      categories: ["Mental Health", "Social Sciences"],
    },
    {
      published: "2023-07-14",
      publisher: "Nonprofit Organization D",
      title: "Promoting STEM Education in Underserved Communities",
      skills: ["Education", "Outreach", "Curriculum Development"],
      categories: ["Education", "STEM Outreach"],
    },
    {
      published: "2023-08-19",
      publisher: "Research Foundation E",
      title: "Advancing Renewable Energy Technologies",
      skills: [
        "Renewable Energy Engineering",
        "Materials Science",
        "Data Analysis",
      ],
      categories: ["Renewable Energy", "Engineering"],
    },
    {
      published: "2023-09-25",
      publisher: "Scientific Society F",
      title: "Investigating the Effects of Pollution on River Ecosystems",
      skills: ["Ecology", "Water Quality Analysis", "Field Research"],
      categories: ["Environmental Science", "Water Quality"],
    },
  ];

  return (
    <div
      className="p-4 flex flex-wrap overflow-y-scroll h-full w-full gap-5 text-sm"
      style={{
        lineHeight: 1.1,
      }}
    >
      {dummyData.map((data) => (
        // eslint-disable-next-line react/jsx-key
        <Idea
          key={data.title + data.publisher + data.published}
          {...data}
        ></Idea>
      ))}
    </div>
  );
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
