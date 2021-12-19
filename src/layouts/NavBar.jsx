import "./NavBar.css";
import Filter from "../components/Filter";
import InputSearch from "../components/InputSearch";
import { useState } from "react";

export default function NavBar() {
  const [selected, setSelected] = useState([]);
  const newSelected = selected;
  const addSelectedIndex = (id) => {
    if (!Array.isArray(selected)) return;
    const indexOfSelected = selected.indexOf(id);
    if (indexOfSelected === -1) newSelected.push(id);
    else newSelected.splice(indexOfSelected, 1);
    setSelected(newSelected);
  };
  return (
    <nav className="navigation">
      <Filter selected={selected} addSelectedIndex={addSelectedIndex}></Filter>
      <InputSearch></InputSearch>
    </nav>
  );
}
