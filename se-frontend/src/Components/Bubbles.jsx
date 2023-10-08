import { BubblesThing } from "./Thing";
import { useState } from "react";
import Bg from "../assets/cloud.png";

export default function Bubbles() {
  const [selected, setSelected] = useState();

  return (
    <div className="w-full h-full">
      <img
        src={Bg}
        className="w-full h-full absolute left-0 top-0 object-center object-cover -z-10"
      />
      <BubblesThing
        options={["science", "coding", "astrophysics"]}
        selected={selected}
        setSelected={setSelected}
      ></BubblesThing>
    </div>
  );
}
