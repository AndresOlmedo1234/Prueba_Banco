import React, { useEffect } from "react";
import "../../sass/layaout.css";

function Hero() {
  const widht = window.innerWidth;
  useEffect(() => {
    console.log("widht", widht);
  }, [widht]);

  const Content = () => {
    return (
      <div className="containerGeneral">
        <div className="contentFirst">
          <div className="remesas">remesas</div>
          <div style={{ width: "400px" }}>
            <span className="text">Tus Giros te acercan </span>
            <span className="text">a los que están lejos</span>

            <p className="contenerdorFirst--texto__centrado">
              Recibe dinero del exterior en tu cuenta o envíalo a más de 200
              países como Colombia, Perú y Chile de forma rápida.
            </p>

            <div className="contentSecond">
              <button className="btnRequisitos">
                Ver Requisitos{" "}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="arrow-forward">
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.33431 3.13434C8.64673 2.82192 9.15327 2.82192 9.46569 3.13434L14.2657 7.93434C14.5781 8.24676 14.5781 8.75329 14.2657 9.06571L9.46569 13.8657C9.15327 14.1781 8.64673 14.1781 8.33431 13.8657C8.0219 13.5533 8.0219 13.0468 8.33431 12.7343L11.7686 9.30002H3.3C2.85817 9.30002 2.5 8.94185 2.5 8.50002C2.5 8.0582 2.85817 7.70002 3.3 7.70002H11.7686L8.33431 4.26571C8.0219 3.95329 8.0219 3.44676 8.33431 3.13434Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
              <button className="btnAbrirCUenta">
                No tienes cuenta? Ábrela aquí
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="arrow-forward">
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.33431 3.13434C8.64673 2.82192 9.15327 2.82192 9.46569 3.13434L14.2657 7.93434C14.5781 8.24676 14.5781 8.75329 14.2657 9.06571L9.46569 13.8657C9.15327 14.1781 8.64673 14.1781 8.33431 13.8657C8.0219 13.5533 8.0219 13.0468 8.33431 12.7343L11.7686 9.30002H3.3C2.85817 9.30002 2.5 8.94185 2.5 8.50002C2.5 8.0582 2.85817 7.70002 3.3 7.70002H11.7686L8.33431 4.26571C8.0219 3.95329 8.0219 3.44676 8.33431 3.13434Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="body">
      <Content />
      <div className="imagesHero"></div>;
    </div>
  );
}

export default Hero;
