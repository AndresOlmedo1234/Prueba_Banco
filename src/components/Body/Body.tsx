import React from "react";
import {
  BodyFirst,
  BodySecond,
  BodyThird,
  DataComponenteFirst,
  DataComponenteSecond,
} from "../../Data/Data";
import { TopComponent } from "./ToComponent";
import { SectionPrimary } from "./SectionPrimary";
import { ContentFragment } from "./CenterFragment";
import { From } from "./From";
import { FragmentBottom } from "./FragmentBottom";

function Body() {
  const Share = () => {
    return (
      <div className="container-center">
        <div className="text-bold">
          Dile a tus familiares que te envíen tus Giros a través de estas
          Remesadoras
        </div>
      </div>
    );
  };

  const Requisitos = () => {
    return (
      <div className="centrado">
        <div
          style={{
            color: "#121212",
            fontSize: 28,
            fontFamily: "Nunito Sans",
            fontWeight: "700",
          }}
        >
          Requisitos para enviar y recibir <br /> tus Giros
        </div>

        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#121212",
              fontSize: 28,
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "4%",
              marginBottom: "4$",
            }}
          >
            Para recibir dinero en Ecuador
          </div>

          <div
            style={{
              color: "#121212",
              fontSize: 28,
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "4%",
              marginBottom: "4$",
            }}
          >
            Para enviar dinero al exterior
          </div>
        </div>

        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#121212",
              fontSize: 18,
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "4%",
              marginBottom: "4$",
              width: "200%",
            }}
          >
            1. Cédula o pasaporte de la persona que recibe el dinero en Ecuador
            (Beneficiario). <br />
            2. Clave del giro (La clave debe dártela la persona que hace el
            envío)
          </div>

          <div
            style={{
              color: "#121212",
              fontSize: 18,
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "4%",
              marginBottom: "4$",
              width: "200%",
              marginLeft: "20%",
            }}
          >
            1. Datos personales de la persona que envía (Ordenante): Nombre y
            apellido cédula o pasaporte, ocupación, dirección y teléfono.
            <br />
            2. Datos personales de quién recibe el dinero en el exterior
            (Beneficiario): Nombres, apellidos y teléfono.
          </div>
        </div>
      </div>
    );
  };

  const Top = () => {
    return (
      <>
        <TopComponent mostrar={true} texto="Si recibes dinero" />
        <SectionPrimary
          estado={true}
          titulo={DataComponenteFirst.titulo}
          parrafo={DataComponenteFirst.cuerpo}
        />
        <TopComponent mostrar={true} texto="Si envias dinero" />
        <SectionPrimary
          estado={false}
          titulo={DataComponenteSecond.titulo}
          parrafo={DataComponenteSecond.cuerpo}
        />
      </>
    );
  };

  const Center = () => {
    return (
      <>
        <ContentFragment
          className="send"
          texto="Envia hasta $9.000 por transacción o acumulado en el mes"
          color="#D2006E"
          textButtom="Ver Requisitos"
          colorButtom="#160F41"
        />
        <Share />
        <From texto="Desde Estados Unidos" cuerpo={BodyFirst} />
        <From texto="Desde Europa" cuerpo={BodySecond} />
        <From texto="Desde Sudamerica" cuerpo={BodyThird} />
      </>
    );
  };

  const Bottom = () => {
    return (
      <>
        <FragmentBottom />
        <div>
          <TopComponent mostrar={false} texto="Requisitos" />
          <Requisitos />
        </div>
        <ContentFragment
          colorButtom="#D2006E"
          className="send"
          textButtom="Contactarme con el Banco"
          texto="Te ayudamos a resolver todas tu dudas"
          color="#160F41"
        />
      </>
    );
  };

  return (
    <>
      <Top />
      <Center />
      <Bottom />
    </>
  );
}
export default Body;
