let Loc = document.querySelector("#city");
let Sta = document.getElementById("state");
let form = document.querySelector("form");
let input = document.querySelector("input");
let time = document.getElementById("time");
let degree = document.getElementById("degree");
let icon = document.getElementById("icon");
let icon1 = document.getElementById("icon1");
let Weather = document.getElementById("weather");
let Humidity = document.getElementById("humidity");
let wind = document.getElementById("wind_kph");
let Visibility = document.getElementById("visibility");
let UV = document.getElementById("UV");
let city_images = document.getElementById("city-img");
let city_name = document.getElementById("city-name");
let Fahrenite  = document.getElementById("fahrenite");
let Humidity_Status = document.getElementById('humidity-status');
let Visibility_Status = document.getElementById('visibility-status');
let rain_status = document.getElementById('rain');
let Longitude= document.getElementById('longitude')

async function getData(e) {
  e.preventDefault();

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5bf93f3a9b06437890e62654232702&q=${input.value}&aqi=yes`
    );
    const data = await res.json();
    console.log(data);
    Longitude.innerText= data.location.lat + "/" + data.location.lon;
    rain_status.innerText = "Rain- "+ data.current.cloud+ "%";
    UV.innerText = data.current.uv;
    Visibility.innerText = data.current.vis_km+ " km";
    wind.innerText = data.current.wind_kph+ " km/h";
    Humidity.innerText = data.current.humidity;
    Weather.innerText = data.current.condition.text;
    degree.innerText = data.current.temp_c + "°C";
    time.innerText = data.location.localtime;
    Loc.innerText = data.location.name;
    icon.innerText = data.current.condition.icon;
    let Icon = "https:" + data.current.condition.icon;
    icon.setAttribute("src", Icon);

    let Icon1 = "https:" + data.current.condition.icon;
    icon1.setAttribute("src", Icon1);

    switch (input.value) {
      case "indore":
        city_images.style.backgroundImage =
          "url('./assets/images/indore.jpeg')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;

      case "jaipur":
        city_images.style.backgroundImage = "url('./assets/images/jaipur.jpg')";
        city_name.innerText = data.location.name + ",  " + data.location.region;

        break;

      case "mumbai":
        city_images.style.backgroundImage ="url('./assets/images/mumbai.webp')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;

      case "london":
        city_images.style.backgroundImage ="url('./assets/images/london.webp')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;  

    case "kedarnath":
        city_images.style.backgroundImage ="url('./assets/images/kedarnath.jpg')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;

    case "kashmir":
        city_images.style.backgroundImage ="url('./assets/images/kashmir.jpg')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;

        case "delhi":
        city_images.style.backgroundImage ="url('./assets/images/delhi.cms')";
        city_name.innerText = data.location.name + ",  " + data.location.region;
        break;
    }


    if(data.current.humidity < 30){

        Humidity_Status.innerText= "Normal";
    }
    else if(data.current.humidity > 30){
        Humidity_Status.innerText= "Average";
    }
    else if(data.current.humidity > 60){
        Humidity_Status.innerText= "High";
    }



    if(data.current.vis_km < 5){
        Visibility_Status.innerText= "Normal"
    }
    else if(data.current.vis_km > 5){
        Visibility_Status.innerText= "Average"
    }
  } catch (error) {
    // window.alert("Enter Valid City Name")
  }

  form.reset();
}



form.addEventListener("submit", getData);


