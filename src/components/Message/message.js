import React from "react";
import { connect } from "react-redux";
import { message } from "antd";


class Message extends React.Component{
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
        return(<></>)
    }
}

export default connect(state => ({
    message: state.alertReducer.message,
    show: state.alertReducer.show,
    type : state.alertReducer.type
}))(Message);
