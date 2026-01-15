import React, { useState } from "react";
import "./superGrid.css";
import { FaChevronDown } from "react-icons/fa";

const SortByComp = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by");

  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
  ];

  const handleSelect = (opt) => {
    setSelected(opt);
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <button className="sort-btn" onClick={() => setOpen(!open)}>
        {selected}
        <FaChevronDown
          className={`arrow ${open ? "rotate" : ""}`}
        />
      </button>

      {open && (
        <div className="dropdown">
          {options.map((opt, i) => (
            <div
              key={i}
              className="dropdown-item"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortByComp;
