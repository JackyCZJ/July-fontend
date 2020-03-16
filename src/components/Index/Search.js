import React,{useState} from "react";
import { AutoComplete } from 'antd';
import {autoComplete} from "../../redux/action/action";




export const SearchForm= ()=>{
      const onSelect=(v)=>{
          console.log(v)
      }

        const [value, setValue] = useState('');
        const [options, setOptions] = useState([])
        const onSearch = searchText => {
            autoComplete(searchText).then(r =>{
                let arr = [];
                if (r.data){
                    Object.keys(r.data).map(v=>{
                       arr.push({value:r.data[v]})
                        }
                    )
                    setOptions (arr)
                }else{
                    setOptions([])
                }
            })
        };
        const onChange = (value)=>{
            setValue(value)
        }
        return (
            <AutoComplete
            options={options}
            value={value}
            placeholder="搜索"
                size="large"
            style={{ width: "100%" }}
            onSelect = {onSelect}
            onSearch={onSearch}
            onChange={onChange}
          />
        )
}

