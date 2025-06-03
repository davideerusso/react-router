import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiBaseUrl = "http://localhost:3000/posts";

export default function Dettaglio() {
  const { id } = useParams();
  const [ricetta, setRicetta] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      const data = res.data.data;
      console.log(data);
      setRicetta(data);
      return;
    });
  }, []);

  return (
    <>
      <img
        className="img-card"
        src={`http://localhost:3000${ricetta.image}`}
        alt=""
      />
      <h2 className="title">{ricetta.title}</h2>
      {ricetta.tags.map((tagg) => (
        <p>{tagg}</p>
      ))}
      {/* {datas.map((dett) => (
          <div key={dett.id} className="actor-card card-30">
            <div className="img-card-container">
              <img
                className="img-card"
                src={`http://localhost:3000${dett.image}`}
                alt=""
              />
            </div>
            <div className="container-info">
              <div className="container-name">
                <h2>{dett.title}</h2>
                {dett.tags.map((tag) => (
                  <a className="birth">{tag}</a>
                ))}
              </div>

              <p className="contenuto">{dett.content}</p>
            </div>
          </div>
        ))} */}
    </>
  );
}
