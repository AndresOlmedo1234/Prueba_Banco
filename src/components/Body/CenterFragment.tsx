import React from "react";
import { IContentFragment } from "../../interfaces/genereal";

export const ContentFragment = ({
  color,
  texto,
  textButtom,
  className,
  colorButtom,
}: IContentFragment) => {
  return (
    <div className="centrado">
      <div style={{ backgroundColor: color }} className={className}>
        {texto}
        <button
          style={{
            backgroundColor: colorButtom,
            outline: "none",
            border: "none",
          }}
        >
          {textButtom}
        </button>
      </div>
    </div>
  );
};
