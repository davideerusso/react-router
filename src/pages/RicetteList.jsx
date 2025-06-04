import { Link } from "react-router-dom";

export default function RicetteList({ posts }) {
  return (
    <>
      <div className="container container-flex">
        {posts.map((d) => (
          <div key={d.id} className="actor-card card-30">
            <div className="img-card-container">
              <img
                className="img-card"
                src={`http://localhost:3000${d.image}`}
                alt=""
              />
            </div>
            <div className="container-info">
              <div className="container-name">
                <h2>{d.title}</h2>
                {d.tags.map((tag) => (
                  <a key={d.id} className="birth">
                    {tag}
                  </a>
                ))}
              </div>

              <p className="contenuto">{d.content}</p>
              <div className="dettaglio-button" key={d.id}>
                <Link to={`/Ricette/${d.id}`}>Dettaglio</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
