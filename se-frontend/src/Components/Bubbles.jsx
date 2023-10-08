import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai'; // Make sure to import the appropriate dependencies
import { apiKey } from '../secrets.jsx';
console.log(apiKey)



export default function Bubbles() {
  const [title, setTitle] = useState('');

  // useEffect(() => {
  //   const newConfig = new Configuration({
  //     apiKey: api
  //   });
  //   const openai = new OpenAIApi(newConfig);

  //   const askGpt = async () => {
  //     try {
  //       const response = await openai.createChatCompletion({
  //         model: "gpt-3.5-turbo",
  //         messages: [{ role: "user", content: "hi" }]
  //       });
  //       const generatedTitle = response.data.choices[0].message.content.replace(/"/g, '');
  //       setTitle(generatedTitle);
  //       console.log(generatedTitle);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   askGpt();

  // }, []);

  return (
    <div className="w-full h-full">
      {/* Render the title */}
      <div>{title}</div>
    </div>
  );
}
