let weather = {
    "apiKey": "c1434da75e05872b3d14b1ab7edfe16e",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city
        + "&units=metric&appid=" 
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data));

    },
    displayWeather: function(data){
        const {name} = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".humidity").innerText = "Humidity " +humidity+ "%";
        document.querySelector(".wind").innerText = "Wind speed is "+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    
};

weather.fetchWeather("Colombo");

function openNav() {
    document.getElementById("myNav").style.width = "20%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

 

  function get_text(e){
    var location = e.innerText;
    console.log(location);
    return weather.fetchWeather(location);
  }



