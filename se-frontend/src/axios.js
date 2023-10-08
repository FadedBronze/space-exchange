import a from "axios";

const axios = a.create({
  baseURL: "http://localhost:3000", // Replace with your desired server URL
});

export default axios;
