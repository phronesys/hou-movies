import "./NavBar.css";
import Filter from "../components/Filter";
import InputSearch from "../components/InputSearch";

export default function NavBar() {
  return (
    <nav className="navigation">
      <Filter></Filter>
      <InputSearch></InputSearch>
    </nav>
  );
}


