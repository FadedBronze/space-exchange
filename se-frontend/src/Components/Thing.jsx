import { useState } from "react";
import useInterval from "../useInterval";

/* eslint-disable react/prop-types */
export function BubblesThing({ options, selected, setSelected }) {
  const angles = Math.PI * 2;
  const section = angles / options.length;
  const [offset, setOffset] = useState(0);

  useInterval(() => {
    setOffset((o) => o + 0.01);
  }, 30);

  return (
    <div className="w-full h-screen relative">
      {options.map((topic, idx) => (
        // eslint-disable-next-line react/jsx-key
        <button
          onClick={() => {
            setSelected(topic);
          }}
          key={topic}
          className="absolute p-6 bg-blue-500 rounded-full text-center text-white font-bold "
          style={{
            transform:
              topic !== selected
                ? `translate(calc(-50% + ${
                    Math.cos(section * idx + offset) * 200
                  }px), calc(-50% + ${
                    Math.sin(section * idx + offset) * 200
                  }px))`
                : "scale(2000%)",
            transition: topic === selected ? "transform 0.5s" : "",
            top: "50%",
            left: "50%",
          }}
        >
          {topic === selected ? "" : topic}
        </button>
      ))}
    </div>
  );
}
