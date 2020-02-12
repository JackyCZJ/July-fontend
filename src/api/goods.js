import { dispatch } from "react-redux"
import Config from 'Config'

const API_URL = Config.baseURL+"/api/v1/"

let GoodsSearch = value =>{
    fetch(API_URL+"goods/search?"+value,{
        method:"GET"

    },)
    .then(resp => resp.json())
    .then(data=>{
        if (data.message){

        }
    })

}
