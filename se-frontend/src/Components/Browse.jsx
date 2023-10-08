/* eslint-disable react/prop-types */
import search from "../assets/search_black.svg";
import Logo from "../assets/Logo.png";
import { useSearch } from "../searchContext";
import { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router";

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
              {props.tags.map((category) => (
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
      setData(ideas.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const dummyData = [
    {
      published: "2023-01-15",
      publisher: "Research Institute A",
      title: "Exploring Sustainable Agriculture Practices",
      tags: ["app development"],
      skills: [
        "Data Analysis",
        "Environmental Science",
        "Agricultural Economics",
      ],
    },
    {
      published: "2023-02-10",
      publisher: "University X",
      title: "Mapping Biodiversity in Urban Areas",
      tags: ["biology"],
      skills: ["GIS", "Ecology", "Data Collection"],
    },
    {
      published: "2023-03-05",
      publisher: "Scientific Society Y",
      title: "Analyzing Climate Change Impacts on Wildlife Migration",
      tags: ["machine learning"],
      skills: ["Climate Science", "Wildlife Biology", "Data Modeling"],
    },
    {
      published: "2023-04-20",
      publisher: "Environmental NGO Z",
      title: "Assessing Air Quality in Urban Environments",
      tags: ["space"],
      skills: [
        "Air Quality Monitoring",
        "Data Visualization",
        "Environmental Health",
      ],
    },
    {
      published: "2023-05-12",
      publisher: "Research Institute B",
      title: "Investigating the Microbiome of Coral Reefs",
      tags: ["biology"],
      skills: ["Marine Biology", "Microbiology", "DNA Sequencing"],
    },
    {
      published: "2023-06-08",
      publisher: "Academic Institution C",
      title: "Studying the Effects of Social Media on Mental Health",
      tags: ["app development"],
      skills: ["Psychology", "Data Analysis", "Survey Design"],
    },
    {
      published: "2023-07-14",
      publisher: "Nonprofit Organization D",
      title: "Promoting STEM Education in Underserved Communities",
      tags: ["app development"],
      skills: ["Education", "Outreach", "Curriculum Development"],
    },
    {
      published: "2023-08-19",
      publisher: "Research Foundation E",
      title: "Advancing Renewable Energy Technologies",
      tags: ["machine learning"],
      skills: [
        "Renewable Energy Engineering",
        "Materials Science",
        "Data Analysis",
      ],
    },
    {
      published: "2023-09-25",
      publisher: "Scientific Society F",
      title: "Investigating the Effects of Pollution on River Ecosystems",
      tags: ["space"],
      skills: ["Ecology", "Water Quality Analysis", "Field Research"],
    },
    {
      published: "2023-10-01",
      publisher: "Tech Startup G",
      title: "Building Cross-Platform Mobile Apps",
      tags: ["app development"],
      skills: ["Mobile App Development", "UI/UX Design", "React Native"],
    },
    {
      published: "2023-10-15",
      publisher: "Software Company H",
      title: "Developing Enterprise Desktop Applications",
      tags: ["app development"],
      skills: ["Desktop App Development", "Java", "C#"],
    },
    {
      published: "2023-10-05",
      publisher: "Research Institute I",
      title: "Studying Plant Genetics",
      tags: ["biology"],
      skills: ["Genetics", "Plant Biology", "Molecular Biology"],
    },
    {
      published: "2023-10-20",
      publisher: "Environmental Conservation Group J",
      title: "Conservation of Endangered Species",
      tags: ["biology"],
      skills: ["Wildlife Conservation", "Ecology", "Field Research"],
    },
    {
      published: "2023-10-10",
      publisher: "AI Startup K",
      title: "Implementing Natural Language Processing Models",
      tags: ["machine learning"],
      skills: ["NLP", "Deep Learning", "Python"],
    },
    {
      published: "2023-10-25",
      publisher: "Research Institute L",
      title: "Predictive Analytics for Healthcare",
      tags: ["machine learning"],
      skills: ["Healthcare Data Analysis", "Machine Learning Algorithms"],
    },
    {
      published: "2023-10-12",
      publisher: "Space Exploration Agency M",
      title: "Mars Colonization Project",
      tags: ["space"],
      skills: ["Astronomy", "Space Engineering", "Rocket Science"],
    },
    {
      published: "2023-10-28",
      publisher: "Climate Research N",
      title: "Climate Change and Earth's Atmosphere",
      tags: ["space"],
      skills: [
        "Atmospheric Science",
        "Climate Modeling",
        "Environmental Research",
      ],
    },
    {
      published: "2023-11-02",
      publisher: "Tech Startup O",
      title: "Creating Mobile Games for Android and iOS",
      tags: ["mobile apps"],
      skills: ["Game Development", "Unity", "Game Design"],
    },
    {
      published: "2023-11-15",
      publisher: "Research Institute P",
      title: "Advanced Studies in Human Anatomy",
      tags: ["anatomy"],
      skills: ["Human Anatomy Dissection", "Medical Illustration", "Histology"],
    },
    {
      published: "2023-11-10",
      publisher: "AI Research Q",
      title: "Ethical Considerations in AI Development",
      tags: ["ai"],
      skills: ["Ethics in AI", "AI Policy", "Responsible AI Development"],
    },
    {
      published: "2023-11-20",
      publisher: "Space Research R",
      title: "Journey to the Red Planet - Mars Exploration",
      tags: ["Mars"],
      skills: ["Mars Rover Operations", "Martian Geology", "Space Exploration"],
    },
    {
      published: "2023-11-30",
      publisher: "Environmental NGO S",
      title: "Earth's Ecosystems and Conservation",
      tags: ["Earth"],
      skills: [
        "Conservation Biology",
        "Ecosystem Monitoring",
        "Environmental Advocacy",
      ],
    },
  ];

  return (
    <div
      className="p-4 flex flex-wrap overflow-y-scroll h-full w-full gap-5 text-sm"
      style={{
        lineHeight: 1.1,
      }}
    >
      {dummyData
        .filter(
          ({ title, skills: s, tags: t }) =>
            title.includes(search) &&
            (keywords.some((d) => t.includes(d)) || keywords.length === 0)
        )
        .map((data) => (
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
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-gray-100 w-60 h-full box-border"
    >
      <div
        className="bg-gray-950 w-60 border-white border-8"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} />
      </div>
      <div className="p-2">
        <Search></Search>
        <MultiSelectDropdownMenu
          dropDowns={[
            "app development",
            "biology",
            "machine learning",
            "space",
          ]}
          additionalDropDowns={{
            "app development": ["desktop apps", "mobile apps"],
            biology: ["cells", "anatomy"],
            "machine learning": ["LLMS", "ai"],
            space: ["Mars", "Earth"],
          }}
          selected={keywords}
          setSelected={setKeywords}
          name="skills"
        ></MultiSelectDropdownMenu>
        <button
          onClick={() => {
            navigate("/bubbles");
          }}
        >
          GO TO BUBBLE FINDER!
        </button>
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
  const { dropDowns, selected, setSelected, name, additionalDropDowns } = props;
  const [down, setDown] = useState();
  const [totalDropDowns, setTotalDropDowns] = useState([]);

  useEffect(() => {
    const newTotalDropdowns = [];

    dropDowns.map((dropDown) => {
      if (selected.includes(dropDown)) {
        newTotalDropdowns.push(...additionalDropDowns[dropDown]);
      }
    });

    setTotalDropDowns([...dropDowns, ...newTotalDropdowns]);
  }, [additionalDropDowns, dropDowns, selected]);

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
        <div className="absolute top-15 left-0 w-50 bg-gray-200 rounded-lg p-4 z-20">
          {totalDropDowns.map((dropDown) => (
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
