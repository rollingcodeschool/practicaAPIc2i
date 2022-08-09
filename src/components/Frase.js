import React from "react";
import Card from "react-bootstrap/Card";
import "../components/frase.css";
const Frase = (props) => {
  return (
    <div className="contenedor py-5">
      <article className="bg-fondo rounded">
        <div className="row py-3 ">
          <div className="col-12 col-md-4 text-center">
            <Card.Img className="width" src={props.personaje.image} />
          </div>
          <div className="col-12 col-md-8 ">
            <article className="container">
              <h2 className="py-2 text-style">{props.personaje.character}</h2>
              <p className="pl-5">
                {props.personaje.quote}
              </p>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Frase;
