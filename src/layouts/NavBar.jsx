import "./NavBar.css";
import Filter from "../components/Filter";

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="flex flex-row gap-2 text-2xl font-bold text-houm-dark">
        <img className="w-14 h-8" src="hou.png" alt="" />
        Movies 🍿
      </div>
      <Filter></Filter>
    </nav>
  );
}
