import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import { Description } from "@mui/icons-material";
export default function SearchBox({ getinfo }) {
    let [err,seterr]=useState(false)
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "912946ce0671428c8b6580ef46f217ba";
  let [city, setCity] = useState("");
  let getWeather = async () => {
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let js = await response.json();
    console.log(js);
    if(js.cod===404||js.cod==="404"){
        seterr(true)
        setinfo(null)
        return;
    }
    seterr(false)
    const info = {
      city: city,
      humidity:js.main.humidity ,
      temp: js.main.temp,
      temp_max: js.main.temp_max,
      temp_min: js.main.temp_min,
      feels_like: js.main.feels_like,
      description:js.weather[0].description
    };
    getinfo(info);
}catch(err){
    seterr(true);
    getinfo(null)
}
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeather();
  };
  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="city"
            variant="outlined"
            onChange={handleChange}
            value={city}
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="Submit">
            Search
          </Button>
          {err&&<h3 className="validate">No such place exists in the API</h3>}
        </form>

      </div>
    </>
  );
}
