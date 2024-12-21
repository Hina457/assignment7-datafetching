

import Main from "./Mainpage/page"
import Bothpage from "./bothpage/page"
import ServerFetching from "./Server/page"
import Clientfetching from "./Client/page"

export default function Home(){
return(
  <div>
    <Main/>
    <Bothpage/>
    <ServerFetching/>
    <Clientfetching/>

    
  </div>
)
}