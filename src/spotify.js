// direct login button to spotify login page
//and addding parameters and redirect it

export const authpoint="https://accounts.spotify.com/authorize";
const redirecturl="http://localhost:3000/";
const id="b8842f79f5f24388b82cdefa4a88a7b7";

const scope=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-stare",
    "user-top-read",
    "user-modify-playback-state"
];
//getting accsee token
export const token=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        const part=item.split("=");
        initial[part[0]]=decodeURIComponent(part[1]);
     return initial
    },[])
}



export const loginurl=`${authpoint}?client_id=${id}&redirect_uri=${redirecturl}&scopes=${scope.join("%20")}&response_type=token&show_dialog=true`;