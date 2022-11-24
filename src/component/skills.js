import React from "react";
import "./skills.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Skills() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d938ea11f0mshc205f4c84614e6cp158eedjsn23f07f41ea02",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
      .then((response) => response.json())
      .then((response) => setName(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="skills">
      <div className="intro">
        <h1>Welcome To Movies! {params.username}</h1>
        <button className="out" onClick={() => navigate(-1)}>
          Log Out
        </button>
      </div>
      <h2>Movie-List</h2>
      <div className="grid">
        {name
          ? name?.map((name) => (
              // <li key={name?.titleOriginal}>
              <div>
                <h3>{name?.titleOriginal}</h3>
                <img src={name.image} alt="name" />
                <h4>Released on: {name.release}</h4>
                <h4>Rating: {name.rating}</h4>
              </div>
              // </li>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Skills;
