import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./order_superGrid.css";
import SortByComp from './SortByComp';
import FiltersTag from './FiltersTag';

import Table from './Table'
const Order_SuperGrid = () => {

  return (
    //                      < ---  superGrid_filerRow -- > --- Header row 

    <div className="pro-table">
      
      <FiltersTag />
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
          <SortByComp />
        </div>
      </div>


      <Table />
    </div>
  );
};

export default Order_SuperGrid;
