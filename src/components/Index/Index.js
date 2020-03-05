import React from "react";
import Category from "./Category";
import { message, Row, Col, Divider } from "antd";
import Banner from "./Banner";
import Broad from "./Broad";
import Config from "Config";
import { connect } from "react-redux";

class Index extends React.Component {
  componentDidMount() {
    document.title = Config.title;
  }
  showMessage(data) {
    message[data.type](data.message);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (nextProps.show) {
       let data = {
            type:nextProps.type,
            message: nextProps.message
        }
      this.showMessage(data);
    }
    return true;
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default connect(state => ({
    message: state.alertReducer.message,
    show: state.alertReducer.show,
    type : state.alertReducer.type
}))(Index);
