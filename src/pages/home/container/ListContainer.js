import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../../../store/action/homeAction";
import JobPost from "../components/JobPost";

const ListContainer = props => {
  const getSortedResults = () => {
    const { startIndex, pageSize, sortBy, sortedData, data } = props.home;
    let datanodes = [];
    let index = startIndex;

    for (let i = 0; i < pageSize; i++, index++) {
      // check if sorting is active
      if (sortBy.active && sortBy.param === "location" && data.data[index])
        datanodes.push(sortedData.location[index].index);
      else if (
        sortBy.active &&
        sortBy.param === "experience" &&
        data.data[index]
      )
        datanodes.push(sortedData.experience[index].index);
      else datanodes.push(index);
    }
    if (sortBy.active) {
      datanodes = sortBy.order === "asc" ? datanodes : datanodes.reverse();
    }
    return datanodes;
  };

  const getListNodes = () => {
    const { showSearchResult, searchDataSet } = props.home;
    return showSearchResult ? searchDataSet : getSortedResults();
  };

  const { loading } = props.home;

  return (
    <div className="list-container">
      <ul className="list">
        {!loading &&
          getListNodes().map(i => <JobPost key={`_${i}`} index={i} />)}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
