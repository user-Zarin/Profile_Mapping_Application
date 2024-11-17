import React, { useState } from "react";

function SearchBar({ placeholder = "Search user's name or location...", onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px 0" }}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{
          padding: "10px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
