import { ajax } from "../tools/ajax";

export const getById = async (ID) => {
  const options = {
    method: "GET",
    url: `https://house-plants2.p.rapidapi.com/id/${ID}`,
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    },
  };
  console.log(ID);
  return await ajax(options);
};
