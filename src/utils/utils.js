import {createBrowserHistory} from 'history';

class Utils{
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
    getParam( name ){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let queryString = window.location.search.split('?')[1] || '';
        let result = queryString.match( reg );
        return result ? encodeURIComponent(result[2]) : null;
    }
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    BrowserHistory(){
        return createBrowserHistory()
    }
}

export default Utils
