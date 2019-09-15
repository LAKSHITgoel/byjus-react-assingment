import React from "react";
import { Pagination } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changePageSize, jumpToPage } from "../../../store/action/homeAction";

const Paginate = props => {
  const onChange = (page, pageSize) => {
    console.log("page", page);
    console.log("pageSize", pageSize);
    let startIndex = (page - 1) * pageSize;
    props.jumpToPage({ startIndex, current: page });
  };

  const onShowSizeChange = (current, size) => {
    console.log("current", current);
    console.log("size", size);
    let startIndex = (current - 1) * size;
    props.changePageSize({ pageSize: size, startIndex, current });
  };

  return (
    // !props.home.showSearchResult && (
      <Pagination
        current={props.home.current}
        size="small"
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        pageSize={props.home.pageSize}
        pageSizeOptions={["10", "20", "30", "40", "50"]}
        total={props.home.data.len}
        showSizeChanger
      />
    
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToPropos = dispatch =>
  bindActionCreators({ changePageSize, jumpToPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToPropos
)(Paginate);
