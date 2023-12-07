import React from "react";
import { IFrom } from "../../interfaces/genereal";

export const From = ({ texto, cuerpo }: IFrom) => {
  return (
    <div className="container-center">
      <div className="listaMarcas">
        <div className="col-span-2 text-bold">{texto}</div>
        {cuerpo.map((e) => {
          return <div className="listaMarcas--marca">{e}</div>;
        })}
      </div>
      <div className="listaMarcas">
        <div className="image_name"></div>
      </div>
    </div>
  );
};
