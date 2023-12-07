import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Remesas from "./remesas";

const IndexPage: React.FC<PageProps> = () => {
  return <Remesas />;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap"
        rel="stylesheet"
      />
    </head>
    <title>Remesas | Banco Guayaquil</title>
  </>
);
