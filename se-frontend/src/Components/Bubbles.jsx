import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai"; // Make sure to import the appropriate dependencies
import { BubblesThing } from "./Thing";
import Bg from "../assets/cloud.png";

const newConfig = new Configuration({
  apiKey: "api key here",
});
const openai = new OpenAIApi(newConfig);

export default function Bubbles() {
  const dummyData = {
    biology: {},
    physics: {
      astrophysics: { mars: {}, earth: {}, jupiter: {} },
      "newtons law": {},
      "slope problem": {},
    },
    chemistry: {},
  };

  //remove dummyData
  const [data, setData] = useState({ science: dummyData, coding: {} });

  const proompt = (topic) =>
    `give me three science topics in one that are subtopics or related to ${topic} in comma separated format with any additional characters or details`;

  const askGpt = async (data) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: data }],
    });
    const generatedTitle = response.data.choices[0].message.content.replace(
      /"/g,
      ""
    );
    console.log(generatedTitle);

    return generatedTitle;
  };

  useEffect(() => {
    // addLayers("science", 3);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const addLayer = (data, ...values) => {
    const newData = { ...data };

    for (let i = 0; i < values.length; i++) {
      newData[values[i]] = {};
    }

    return newData;
  };

  const addLayers = async (topic, times) => {
    if (times === 0) return;
    const newtimes = times - 1;

    const data = (await askGpt(proompt("astrophysics"))).split(",");

    if (!data) return;
    addLayer(topic, data);
    addLayers(data[0], newtimes);
    addLayers(data[1], newtimes);
    addLayers(data[2], newtimes);
  };

  const [selected, setSelected] = useState();

  const [currentLayer, setCurrentLayer] = useState(data);

  useEffect(() => {
    if (!selected) return;

    setCurrentLayer((currentLayer) => currentLayer[selected]);
    setSelected(false);
  }, [selected]);

  return (
    <div className="w-full h-full">
      <img
        src={Bg}
        className="w-full h-full absolute left-0 top-0 object-center object-cover -z-10"
      />
      <BubblesThing
        options={Object.keys(currentLayer).map((key) => key)}
        selected={selected}
        setSelected={setSelected}
      ></BubblesThing>
    </div>
  );
}
