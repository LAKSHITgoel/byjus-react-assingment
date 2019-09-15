import React from "react";
import ListContainer from "./container/ListContainer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData, setSortedData } from "../../store/action/homeAction";
import FilterContainer from "./container/FilterContainer";
import { Progress } from "antd";

class Home extends React.Component {
  sortBylocation = (a, b) => {
    return a.location.toLowerCase().localeCompare(b.location.toLowerCase());
  };
  sortBycompanyName = (a, b) => {
    return a.companyname
      .toLowerCase()
      .localeCompare(b.companyname.toLowerCase());
  };

  sortByExperience = (a, b) => {
    let x = Number(a.experience[0]);
    let y = Number(b.experience[0]);
    let d = x - y;
    if (d !== NaN) return d;
    else return -1;
  };

  sort = () => {
    const { data } = this.props.home.data;
    let loc = [];
    let experience = [];
    let company = [];
    data.map((o, i) => {
      let e = [];
      let c = "";
      let l = o.location
        .split(",")
        .map(s => s.trim())
        .sort()
        .join(",");

      o.experience.split(/[^0-9]/).map(s => {
        if (Number(s) !== NaN && Number(s) > 0) e.push(Number(s));
      });
      e = e.sort().join("-");
      c = o.companyname.trim();
      loc.push({ ...o, location: l, index: i });
      experience.push({ ...o, experience: e, index: i });
      company.push({ ...o, companyname: c, index: i });
    });
    loc.sort(this.sortBylocation);
    experience.sort(this.sortByExperience);
    company.sort(this.sortBycompanyName);
    this.props.setSortedData({
      companyname: company,
      location: loc,
      experience
    });
  };

  componentDidMount() {
    this.props.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.home.loading !== this.props.home.loading) {
      this.sort();
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.home.loading && (
          <div className="load-container">
            <Progress
              type="circle"
              percent={this.props.home.load}
              status="active"
            />
            <br/>
            <h2>Fetching Data</h2>
          </div>
        )}
        {!this.props.home.loading && (
          <>
            <FilterContainer />
            <br />
            <ListContainer load={window.listLoading} />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getData, setSortedData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
