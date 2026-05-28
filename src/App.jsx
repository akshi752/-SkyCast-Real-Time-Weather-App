import "@fontsource/pacifico";
import "./App.css";
import SearchBox from "./SearchBox.jsx";
import Display from "./Display.jsx";
import {useState} from "react"
function App() {
  let [info, setinfo] = useState(null);
  let getinfo = (newinfo) => {
    setinfo(newinfo);
  };
  return (
    <>
      <div className="weatherApp">
        
          <h1>Weather App</h1>
          <div className="name">
            <h2>Enter city name : -</h2>
            &nbsp;&nbsp;
        <SearchBox getinfo={getinfo}></SearchBox>
          </div>
        
        
        
        <br></br>
        {info&&<Display info={info}></Display>}
      </div>
    </>
  );
}
export default App;
