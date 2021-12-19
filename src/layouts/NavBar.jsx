import "./NavBar.css";
import Filter from "../components/Filter";
import InputSearch from "../components/InputSearch";
import { useState } from "react"

export default function NavBar() {
  const [selected, setSelected] = useState([]);
  
  return (
    <nav className="navigation">
      <Filter selected={selected} setSelected={setSelected}></Filter>
      <InputSearch></InputSearch>
    </nav>
  );
}
