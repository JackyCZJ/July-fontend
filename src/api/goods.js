import { dispatch } from "react-redux"

const baseurl = "localhost:2333/api/v1/"

let GoodsSearch = value =>{
    fetch(baseurl+"goods/search?"+value,{
        method:"GET"

    },)
    .then(resp => resp.json())
    .then(data=>{
        if (data.message){
            
        }
    })

}