import React from "react";
import Paginate from "../components/Paginate";
import Sort from "../components/Sort";
import Search from "../components/Search";

const FilterContainer = props => {
  return (
    <div className="filter-container">
      <Sort />
      <Search />
      <Paginate />
    </div>
  );
};

export default FilterContainer;
