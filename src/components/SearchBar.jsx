import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
function SearchBar({ mobile }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <>
      <form className={mobile ? "searchbar__form searchbar__form_mobile" : "searchbar__form"} onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Введите запрос"
          className="searchbar__input"
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            color: "gray",
            backgroundColor: "#222222",
            borderRadius: 0,
          }}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
}

export default SearchBar;
