import React, { useEffect } from "react";
import "../../sass/layaout.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Header() {
  const widht = window.innerWidth;
  /* const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "../images/images1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `); */

  useEffect(() => {
    console.log("widht", widht);
  }, [widht]);

  return (
    <div
    className="body"
    >
      <div
        style={{
          width: "400px",
          height: "583px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "32px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            height: "272px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "12px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "400px",
              color: "white",
              fontSize: "12px",
              fontFamily: "Nunito Sans",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: "16.80px",
              letterSpacing: "2.40px",
              wordWrap: "break-word",
            }}
          >
            remesas
          </div>
          <div style={{ width: "400px" }}>
            <span
              style={{
                color: "#ED99C5",
                fontSize: "44px",
                fontFamily: "Nunito Sans",
                fontWeight: 700,
                lineHeight: "52.80px",
                wordWrap: "break-word",
              }}
            >
              Tus Giros te acercan{" "}
            </span>
            <span
              style={{
                color: "white",
                fontSize: "44px",
                fontFamily: "Nunito Sans",
                fontWeight: 700,
                lineHeight: "52.80px",
                wordWrap: "break-word",
              }}
            >
              a los que están lejos
            </span>
          </div>
          <div
            style={{
              height: "72px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "12px",
              display: "flex",
            }}
          >
            <div
              style={{
                height: "72px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "8px",
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "12px",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Nunito Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                    wordWrap: "break-word",
                  }}
                >
                  Recibe dinero del exterior en tu cuenta o envíalo a más de 200
                  países como Colombia, Perú y Chile de forma rápida.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "16px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "286px",
              height: "48px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "286px",
                flex: "1 1 0",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "16px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "286px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "16px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1 1 0",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    background: "#D2006E",
                    borderRadius: "32px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "16px",
                      fontFamily: "Nunito Sans",
                      fontWeight: 700,
                      lineHeight: "24px",
                      wordWrap: "break-word",
                    }}
                  >
                    Ver Requisitos
                  </div>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "11.20px",
                        left: "2px",
                        top: "2.40px",
                        position: "absolute",
                        background: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "286px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1 1 0",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderRadius: "32px",
                border: "2px #EDEDED solid",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Nunito Sans",
                  fontWeight: 700,
                  lineHeight: "24px",
                  wordWrap: "break-word",
                }}
              >
                No tienes cuenta? Ábrela aquí
              </div>
              <div
                style={{ width: "16px", height: "16px", position: "relative" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "11.20px",
                    left: "2px",
                    top: "2.40px",
                    position: "absolute",
                    background: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        style={{ width: "709px", height: "583px" }}
        src="https://via.placeholder.com/709x583"
      />
    </div>
  );
}

export default Header;
