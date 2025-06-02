import { useState, useEffect } from "react";
import axios from "axios";
const apiBaseUrl = "https://lanciweb.github.io/demo/api/actors/";

export default function Homepage() {
  const [actor, setActor] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}`).then((res) => {
      const actors = res.data;
      setActor(actors);
      return;
    });
  }, [actor]);

  return (
    <>
      <div className="container container-flex">
        {actor.map((a) => (
          <div key={a.id} className="actor-card card-30">
            <div className="img-card-container">
              <img className="img-card" src={a.image} alt="" />
            </div>
            <div className="container-info">
              <div className="container-name">
                <h2>{a.name}</h2>
                <a className="birth">{a.birth_year}</a>
                <a>{a.nationality} </a>
                <p className="awards">{a.awards}</p>
              </div>
              <div className="container-bio">{/* <a>Nationality: </a> */}</div>
              <p>{a.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
