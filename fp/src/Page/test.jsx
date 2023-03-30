// import React, { useState, useEffect } from 'react';
// import './test.css'
// function WeatherApp() {
//   const [cityInput, setCityInput] = useState('Ho Chi Minh');
//   const [weatherData, setWeatherData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getApiData();
//   }, []);

//   function getApiData() {
//     setLoading(true);
//     fetch(`http://api.weatherapi.com/v1/current.json?key=e6436b1f28df443891131052230802&q=${cityInput}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setWeatherData(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         alert('Information not found. Try again!');
//         setLoading(false);
//       });
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     const searchInput = e.target.elements.search.value;
//     if (searchInput.length === 0) {
//       alert('Please enter information in the search box.');
//     } else {
//       setCityInput(searchInput);
//       e.target.reset();
//     }
//   }

//   function dayOfWeek(d) {
//     const months = [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December',
//     ];
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const day = days[d.getDay()];
//     const date = d.getDate();
//     const month = months[d.getMonth()];
//     const year = d.getFullYear();
//     return `${day} ${date} ${month} ${year}`;
//   }

//   function getWeatherBackground() {
//     let timeOfDay = 'day';
//     const code = weatherData.current?.condition?.code;
//     const isDay = weatherData.current?.is_day;

//     if (!isDay) {
//       timeOfDay = 'night';
//     }

//     if (code === 1000) {
//       return {
//         backgroundImage: `url("https://images.unsplash.com/photo-1679954564570-8cf4a3d6ad23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80")`,
//         backgroundColor: '#e5ba92',
//       };
//     } else if (
//       code === 1003 ||
//       code === 1006 ||
//       code === 1009 ||
//       code === 1030 ||
//       code === 1069 ||
//       code === 1087 ||
//       code === 1135 ||
//       code === 1273 ||
//       code === 1276 ||
//       code === 1279 ||
//       code === 1282
//     ) {
//       return {
//         backgroundImage: `url("https://images.unsplash.com/photo-1679954564570-8cf4a3d6ad23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80")`,
//         backgroundColor: '#218380',
//       };
//     } else if (
//       code === 1063 ||
//       code === 1069 ||
//       code === 1072 ||
//       code === 1150 ||
//       code === 1153 ||
//       code === 1180 ||
//       code === 1183 ||
//       code === 1186 ||
//       code === 1189 ||
//       code === 1192 ||
//       code === 1195 ||
//       code === 1204 ||
//       code === 1207 ||
//       code === 1240 ||
//       code === 1243 ||
//       code === 1246 ||
//       code === 1249 ||
//       code === 1252
//     ) {
//       return {
//         backgroundImage: `url("https://images.unsplash.com/photo-1679954564570-8cf4a3d6ad23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80")`,
//         backgroundColor: '#3e5c76',
//       };
//     } else {
//       return {
//         backgroundImage: `url("https://images.unsplash.com/photo-1679954564570-8cf4a3d6ad23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80")`,
//         backgroundColor: '#b7c0c7',
//         };
//         }
//         }
        
//         const weatherBackground = getWeatherBackground();
        
//         return (
//             <div class="weather-app">
//             <div class="container">
//                 <h3 class="brand"> <i class="fa-solid fa-cloud-sun"></i> Current time weather</h3>
//                 <div>
//                     <h1 class="temp">16&#176C</h1>
//                     <div class="city-time">
//                         <h1 class="name">Ho Chi Minh</h1>
//                         <small>
//                             <span class="time">06:09</span>
//                             <span class="date">Monday Sep 19</span>
//                         </small>
//                     </div>
//                     <div class="weather">
//                         <span class="condition">Cloudy</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="panel">
//                 <form id="locationInput">
//                     <input
//                         class="search" 
//                         type="text"
//                         placeholder="Enter location name..."
//                         />
//                     <button class="submit" type="submit">
//                         <i class="fa-solid fa-magnifying-glass"></i>
//                     </button>
//                 </form>
                
//                 <ul class="details">
//                     <h4>Weather Details</h4>
//                     <li>
//                         <span>Country</span>
//                         <span class="country">VietNam</span>
//                     </li>
//                     <li>
//                         <span>Last-updated</span>
//                         <span class="lastupdated">2023-02-13 14:30</span>
//                     </li>
//                     <li>
//                         <span>Temp_F</span>
//                         <span class="temp_f">89%</span>
//                     </li>
//                 </ul>
//                 <ul class="details">
//                     <li>
//                         <span>Cloudy</span>
//                         <span class="cloud">78%</span>
//                     </li>
//                     <li>
//                         <span>Wind</span>
//                         <span class="wind">9km/h</span>
//                     </li>
//                     <li>
//                         <span>Wind direction</span>
//                         <span class="wind_direction">W</span>
//                     </li>
//                     <li>
//                         <span>Huminity</span>
//                         <span class="humidity">45%</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         );
//         }
        
//         export default WeatherApp;
