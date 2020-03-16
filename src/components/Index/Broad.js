import React from "react";
import { connect } from 'react-redux' // 引入connect
import Item from "./Item";
import {Divider, List} from 'antd'
import PropTypes from 'prop-types';
import {indexList} from "../../redux/action/action";


class Broad extends React.Component{

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(indexList())

    }

    render() {
        const { lists } = this.props;
        return(
            <>
            <List
                grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 4,
                }}
                dataSource={lists}
                renderItem	={item=>(
                <List.Item>
                    <Item title={item.name} id={item._id} price={item.price} src={item.image_uri} />
                </List.Item>
            )}
            />
            </>
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
        name : PropTypes.string.required,
        image_uri : PropTypes.string.required,
        price : PropTypes.number.required,
        id : PropTypes.number.required
    }).isRequired).isRequired
}

export default connect(getList)(Broad)
