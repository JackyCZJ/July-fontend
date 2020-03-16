import React from "react";
import Category from "./Category";
import {  Row, Col} from "antd";
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
            <Col span={12}><Banner /></Col>
          <Col span={24}>
            <Category />
          </Col >
            <Col span={18}>
            <Broad />
            </Col>
        </Row>
    );
  }
}

export default Index;
