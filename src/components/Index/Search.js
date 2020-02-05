import React, { Component,setState, } from "react";
import { AutoComplete } from 'antd';




export default class SearchForm extends React.Component{
   
    search = searchText => {
        this.setState({
            value : searchText,
            dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
          });
      };
    state = {
        value: '',
        dataSource: [],
      };
      onSelect(v) {
        console.log('onSelect', v);
        this.setState({
            value : v
        })
      }
    render(){
        const { dataSource, value } = this.state;
        return (
            <AutoComplete
            dataSource={dataSource}
            value={value}
            placeholder="搜索"
                size="large"
            style={{ width: "100%" }}
            onSelect = {v => this.onSelect(v)}
            onSearch={value => this.search(value)}
          />
        )
    }
}
