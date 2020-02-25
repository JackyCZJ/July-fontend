import React from "react";
import { connect } from 'react-redux' // 引入connect
import Item from "./Item";
import {List,message} from 'antd'
import PropTypes from 'prop-types';
import {indexList} from "../../redux/action";


class Broad extends React.Component{

    componentDidMount() {
        indexList()

    }

    render() {
        const { lists } = this.props;
        return(
            <List
                dataSource={lists}
                grid={{ gutter: 16, column: 4 }}
                renderItem	={item=>(
                <List.Item>
                    <Item title={item.title} price={item.price} src={item.src} />
                </List.Item>
            )}
            />
        )
    }
}

const getList = state => {
    return {
        lists: state.index.lists
    }
}

Broad.prototypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string.required,
        src : PropTypes.string.required,
        price : PropTypes.number.required
    }).isRequired).isRequired
}

export default connect(getList)(Broad)
