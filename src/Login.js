import React, { useEffect } from "react";
import './Login.css'
import {loginurl} from './spotify'
import {token } from "./spotify";

function Login(){



    return(
      <div className="login">
       <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
       <a href={loginurl}>LOGIN WITH SPOTIFY</a>
      </div>
    )   
}
export default Login
// b8842f79f5f24388b82cdefa4a88a7b7