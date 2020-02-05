import React, { Component,setState, } from "react";
import { Input } from 'antd';

const { Search } = Input;


export default class SearchForm extends React.Component{
    search = (e)=>{
        console.log(e)
    }
    render(){
        return (
            <Search
            placeholder="搜索"
                size="large"
            onSearch={value => this.search(value)}
          />
        )
    }
}
