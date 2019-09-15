import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setSearchResults,
  unSetSearchResults
} from "../../../store/action/homeAction";
import { Input } from "antd";

const Search = props => {
  const getRelevancy = (value, searchTerm) => {
    if (value === searchTerm) {
      return 2;
    } else if (value.startsWith(searchTerm)) {
      return 1;
    } else return 0;
  };

  const onSearch = value => {
    const { companyname } = props.home.sortedData;
    let newset = [];
    if (value !== "" && value.trim().length > 2) {
      newset = companyname
        .filter((obj, i) => {
          if (obj.companyname.toLowerCase().includes(value.toLowerCase()))
            return { ...obj, index: i };
        })
        .sort((a, b) => {
          return (
            getRelevancy(b.companyname, value) -
            getRelevancy(a.companyname, value)
          );
        });
      console.log("newset", newset);
      newset = newset.map(o => o.index);
      props.setSearchResults([...newset]);
    } else {
      props.unSetSearchResults();
    }
  };

  const onClear = e => e.target.value === "" ?  props.unSetSearchResults() : null;

  return (
    <Input.Search
      style={{ maxWidth: "60%" }}
      allowClear
      onChange={onClear}
      size="small"
      placeholder="Search By Company Name"
      onSearch={onSearch}
    />
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSearchResults, unSetSearchResults }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
