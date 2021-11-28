import React, { ReactElement } from "react";
import Featured from "../../components/featured/Featured.component";
import NavBar from "../../components/navBar/NavBar.component";
import "./Home.scss";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movie" />
    </div>
  );
}
