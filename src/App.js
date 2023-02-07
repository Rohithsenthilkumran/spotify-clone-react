
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import {token } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
//  import {useDataLayerValue} from './DataLayer';
//  import { ReactDOM } from 'react';
const spotify= new SpotifyWebApi(); 
function App() {
  console.log("asdh")
    const [key,getKey]=useState(0)  ;
    // const[user,dispatch]=useDataLayerValue();
    useEffect(()=>{
      const hash=token();
      const _key=hash.access_token;
    window.location.hash="";
    console.log("i have a token",hash);

    if(_key){
      getKey(_key);
      spotify.setAccessToken(_key);
      // spotify.getMe().then(user=>{
      //   dispatch({
      //     type:"USER_TYPE",
      //     user:user,
      //   })
      // })
    }
    // console.log("i am",user)
  },[])
  
  
  return (
    <div className="App">
      {key?(<h1>i am shadow</h1>)
        :(<Login/>)
      }
</div>
  );
}

export default App;
