import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sortByOrder, sortByParam } from "../../../store/action/homeAction";
import { Dropdown, Icon, Menu, Radio, Button } from "antd";

const Sort = props => {
  const { order } = props.sortBy;
  const onSelect = ({ key }) => {
    if (key === "reset") props.sortByParam({ active: true, order:"asc" });
    else props.sortByParam({ param: key, order, active: true });
  };

  const changeOrder = e => {
    const { param } = props.sortBy;
    props.sortByOrder({ param, order: e.target.value, active: true });
  };

  const getDropdownMenu = () => {
    const { order } = props.sortBy;
    return (
      <div
        style={{
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          borderRadius: 5
        }}
      >
        <Radio.Group
          style={{ margin: 10 }}
          onChange={changeOrder}
          name="order"
          buttonStyle="outline"
          value={order}
        >
          <Radio.Button value="asc">
            <Icon type="up" />
          </Radio.Button>
          <Radio.Button value="desc">
            <Icon type="down" />
          </Radio.Button>
        </Radio.Group>
        <Menu onSelect={onSelect} style={{ borderRadius: 5 }}>
          <Menu.Item key="location">Location</Menu.Item>
          <Menu.Item key="experience">Experience</Menu.Item>
          <Menu.Item key="reset">Reset</Menu.Item>
        </Menu>
      </div>
    );
  };

  return (
    <Dropdown trigger={["click", "hover"]} overlay={getDropdownMenu()}>
      <Button type="primary">
        <span>
          Sort&nbsp;&nbsp;
          <Icon type="filter" />
        </span>
      </Button>
    </Dropdown>
  );
};

const mapStateToProps = state => ({
  sortBy: state.home.sortBy
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sortByOrder, sortByParam }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
