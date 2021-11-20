import React, { ReactElement } from "react";
import NavBar from "../../components/navBar/NavBar.component";
import "./Home.css";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div className="home">
      <NavBar />
    </div>
  );
}
