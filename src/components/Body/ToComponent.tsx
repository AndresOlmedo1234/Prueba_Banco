import React from "react";
import { ITopComponent } from "../../interfaces/genereal";

export const TopComponent = ({ mostrar, texto }: ITopComponent) => {
  return (
    <div className="sectionGen">
      <div className="text-money">
        <p className="text-money__btn">{texto}</p>
      </div>
      <div
        style={{ display: mostrar ? "flex" : "none" }}
        className="SectionRecibeMoney"
      >
        <p className="SectionRecibeMoney--text">
          Si recibes dinero Recibe dinero del exterior dentro de Ecuador sin
          recargos adicionales
        </p>
      </div>
      <div className="">
        <p className="txt-Exterior"></p>
      </div>
    </div>
  );
};
