import "./InputSearch.css";
import IconSearch from "./icons/IconSearch";

export default function InputSearch() {
  return (
    <div className="input-search">
      <input type="text" placeholder="Search by name" />
      <IconSearch></IconSearch>
    </div>
  );
}
