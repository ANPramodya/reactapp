import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Profile = () => {
    const { isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
    <div>
      <link rel="stylesheet" href="./style.css"></link>
      <script src="./script.js"></script>
      
      <div id="myNav" className="overlay">
        <a href="/#" className="closebtn" onClick= {closeNav()}>&times;</a>
        <div class="overlay-content">
            <a href="/#" onClick={get_text(this)}>Colombo</a>
            <a href="/#" onClick={get_text(this)}>Tokyo</a>
            <a href="/#" onClick={get_text(this)}>Liverpool</a>
            <a href="/#" onClick={get_text(this)}>Paris</a>
            <a href="/#" onClick={get_text(this)}>Sydney</a>
            <a href="/#" onClick={get_text(this)}>Boston</a>
            <a href="/#" onClick={get_text(this)}>Shanghai</a>
            <a href="/#" onClick={get_text(this)}>Oslo</a>
          </div>
          
    </div>
    
    <div className="cities">
        <span onClick= {openNav()}>Cities</span>
    </div>
    <div className="logout">
        <span>LogOut</span>
    </div>
    <div class = "card"> 
    
        
        
        <div className="weather loading">
            <h2 className = "city">Weather in Denvar</h2>
            <h1 className="temp">51°C</h1>
            <div className="flex">
            <img src="https://openweathermap.org/img/wn/04d.png" alt="" class="icon" />
            <div className="description">Cloudy</div>
        </div>
            <div className="humidity">60%</div>
            <div className="wind">Wind Speed 20km/h</div>
        </div>
    </div>
      
        
    </div>
    
    )
    
  )
}

export default Profile