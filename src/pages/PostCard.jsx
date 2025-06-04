import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

export default function PostCard() {
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
      <div className="container dettaglio-container">
        <Link className="indietro" to={`/Ricette`}>
          Indietro
        </Link>
        <div className="card-dettaglio">
          <img
            className="img-card-dettaglio"
            src={`http://localhost:3000${ricetta.image}`}
            alt=""
          />
          <div className="card-descrizione-dettaglio">
            <h2 className="title">{ricetta.title}</h2>
            <p className="birth">{ricetta.tags}</p>
            <p className="descrizione-dettaglio">{ricetta.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
