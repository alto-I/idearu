import React, { useEffect } from "react";
import { fetchIdeas } from "../apis/ideas";

const Idea = () => {
  useEffect(() => {
    fetchIdeas().then((data) => console.log(data));
  }, []);
  return <div>Idea</div>;
};
export default Idea;
