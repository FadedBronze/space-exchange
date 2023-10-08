import searchIcon from "../assets/search.svg";
import Bg from "../assets/landingBg.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../searchContext";

export default function LandingPage() {
  const navigate = useNavigate();
  const { setSearch } = useSearch();

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <img className="w-full h-full object-center object-cover" src={Bg}></img>

      <div className="absolute top-0 left-0 w-full h-full px-12 py-4">
        <nav className="md:h-20 max-md:h-15 flex justify-between">
          <img className="max-md:h-8" src={Logo} />
          <div className="flex gap-5 text-xl items-center">
            <button
              onClick={() => {
                navigate("/browse");
              }}
              className="border-2 text-white border-white rounded-full max-md:text-sm max-md:border-0 max-md:text-white max-md:p-0 px-4 py-1.5"
            >
              Browse
            </button>
            <button className="border-2 bg-white rounded-full max-md:bg-transparent max-md:w- max-md:text-sm max-md:border-0 max-md:text-white max-md:p-0 md:px-4 py-1.5">
              Build Your Idea
            </button>
          </div>
        </nav>
        <div className="flex gap-24 py-20 justify-center encode flex-col">
          <div className="flex flex-col gap-3">
            <p className="font-bold max-lg:text-[20px] lg:text-[60px] text-white">
              FIND <u>YOUR</u> IDEA.
            </p>
            <p className="text-orange-500 max-lg:text-[30px] lg:text-[50px] 2xl:w-2/3">
              The Universal Data Exchange Highway For Science And Tech.
            </p>
          </div>
          <div className="relative 2xl:w-1/2">
            <input
              className="outline-none text-white px-5 w-full py-2 rounded-full bg-white bg-opacity-20 placeholder:text-white backdrop-blur-sm"
              placeholder="Search for Ideas"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(e.currentTarget.value);
                  navigate("/browse");
                }
              }}
            ></input>
            <img
              className="absolute top-1/2 right-1 w-5 h-5 -translate-x-1/2 -translate-y-1/2"
              src={searchIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
