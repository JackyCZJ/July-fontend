import React from "react";
import Category from "./Category";
import { message, Row, Col, Divider } from "antd";
import Banner from "./Banner";
import Broad from "./Broad";
import Config from "Config";

class Index extends React.Component {
  componentDidMount() {
    document.title = Config.title;
  }

  render() {
    return (
        <Row justify="center">
          <Banner />
          <Col>
            <Category />
          </Col>
          <Row type="flex" justify="center">
            <h2>
              随便看看
              <Divider type="vertical" />
              Any shit
            </h2>
          </Row>
          <Broad />
        </Row>
    );
  }
}

export default Index;
