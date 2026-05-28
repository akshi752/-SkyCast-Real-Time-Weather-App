import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Display.css";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function Display({ info }) {
  let hot =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
  let cold =
    "https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rain =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmluZyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="Display">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? rain : info.temp < 17 ? cold : hot}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="cityicon">
                {info.city}
                &nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp < 17 ? (
              <AcUnitIcon />
            ) : (
              <WbSunnyIcon />
            )}
            </div>
            
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Humidity: {info.humidity}%</p>
            <p>Temp: {info.temp}&deg;C</p>
            <p>Temp_max: {info.temp_max}&deg;C</p>
            <p>Temp_min: {info.temp_min}&deg;C</p>
            <p>
              The weather is {info.description} and feels like {info.feels_like}
              &deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
