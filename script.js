
const API_KEY = "af2530d9ef53a19b9a98063699d3971f";

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";
//   let city = goa;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 
async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${API_KEY}&units=metric`);

    // console.log(data);

    // show error status
    if(response.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display = "none";

    }
    else{

    var data = await response.json();
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    // weather condition images
    // if(data.weather[0].main=="Clouds"){

    // }

    document.querySelector(".weather").style.display="flex";
    document.querySelector(".error").style.display="none";
    }
  }

  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
  });
//   checkWeather();
 