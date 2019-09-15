import React from "react";
import { connect } from "react-redux";
import { Button, Card, Tag } from "antd";

const JobPost = props => {
  const { data } = props.home;
  const { index } = props;
  return data.data[index] ? (
    <li key={`_${data.data[index]._id}`} className="list-item">
      <Card hoverable title={data.data[index].companyname}>
        <Card.Meta
          title={data.data[index].title && data.data[index].title}
          description={data.data[index].jd && data.data[index].jd}
        />
        <div style={{ marginTop: "1em" }}>
          <p>
            Skills:{" "}
            <span>
              {data.data[index].skills.split(",").map((tag, i) => (
                <Tag key={`_${i}`}>{tag}</Tag>
              ))}
            </span>
          </p>
          {data.data[index].experience && (
            <p>Experience: {data.data[index].experience}</p>
          )}
          {data.data[index].salary && <p>Salary : {data.data[index].salary}</p>}
          {data.data[index].location && (
            <p>Location : {data.data[index].location}</p>
          )}
          {data.data[index].created && <p>{data.data[index].created}</p>}
          <Button
            href={data.data[index].applylink}
            type="primary"
            target="_blank"
          >
            Apply
          </Button>
        </div>
      </Card>
    </li>
  ) : (
    <div></div>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(
  mapStateToProps,
  {}
)(JobPost);
