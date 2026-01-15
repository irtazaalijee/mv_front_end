import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./superGrid.css";
import SortByComp from './SortByComp';
import FiltersTag from './FiltersTag';

import Table from './Table'
const SuperGrid = (
  {
    filterTags,
sortingFilter,
tableColumn,
tableData,
Expandable_row
  }
) => {

  return (
    //                      < ---  superGrid_filerRow -- > --- Header row 

    <div className="pro-table">
      
      <FiltersTag data={filterTags} />
      <div className="superGrid_filerRow">
        <div className="searchBar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            id="name-input"
            className="search_input_field"
            placeholder="Find Your Data"
          />
        </div>
        <div className="filters_box">
          <SortByComp data={sortingFilter} />
        </div>
      </div>


      <Table column_keys={tableColumn} tableData={tableData} Expandable_row={Expandable_row} />
    </div>
  );
};

export default SuperGrid;
