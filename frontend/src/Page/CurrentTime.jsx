import React, { useState } from 'react'
import './CurrentTime.css'
import axios from "axios"
// import { faLocationDot, faSearch, faTemperature0, faWind} from '@fortawesome/free-solid-svg-icons'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CurrentTime = () => {
    const [inputLocation, setInputLocation] = useState("")
    const [data, setData] = useState([])
    const getDataWeather = (location) => {
        const api = "http://api.weatherapi.com/v1/current.json?key=e6436b1f28df443891131052230802&q=" + location
        axios.get(api)
            .then((respone) => {
            console.log(respone.data)
            setData(respone.data)
        }).catch((error) => {
            alert("Information not found. Try again!");
        })
    }

    const handleInput = (e) => {
        setInputLocation(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        getDataWeather(inputLocation)
    }

    return (
    <div >
        <h1 className='title'>Weather Current</h1>

        <div className="search">
          <form>
            <input
                className='input'
                type="text"
                size={30}
                placeholder='Enter location name...'
                value={inputLocation}
                onChange={handleInput}
            />
            <button className='submit' onClick={handleSearch}><SearchIcon /></button>
          </form> 
        </div>
        {Object.keys(data).length > 0 &&
        <div className='bd'>
            <div className='icon'>               
                <ul>
                    <li><img src={data.current.condition.icon} alt="icon" /></li>
                    <li className='loname'>{data.location.name}</li>
                    <h3>{data.current.is_day === 1 ?"Day":"Night" }</h3>
                </ul>
            </div>
            <div className='detail'>
                <ul className='weatherdetail'>
                    <h1>
                        <AirIcon/>
                    </h1>
                    <h2>Weather details</h2>
                    <li className='uv'>{"UV " + data.current.uv}</li>
                    <li className='viskm'>{"Visibility in kilometer " + data.current.vis_km}</li>
                    <li className='vism'>{"	Visibility in miles " + data.current.vis_miles}</li>
                    <li className='feelc'>{"Feel_C" + data.current.feelslike_c}</li>
                    <li className='feelf'>{"Feel_F " + data.current.feelslike_f}</li>
                </ul>
                <ul className='locationdetail'>
                    <h1>
                        <LocationOnIcon/>
                    </h1>
                    <h2>Location details</h2>
                    <li>{"Region " + data.location.region}</li>
                    <li className='country'>{"Country " + data.location.country}</li>
                    <li className='time'>{data.location.localtime}</li>
                    <li className='tzid'>{data.location.tz_id}</li>
                    <li className='lastupdated'>{"Last_Updated " + data.current.last_updated}</li>
                </ul>
                <ul className='weatherdetail'>
                    <h1>
                        <ThermostatIcon/>
                    </h1>
                    <h2>Weather details</h2>
                    <li className='condition'>{data.current.condition.text}</li>
                    <li className='tempc'>{"Temp_C " + data.current.temp_c} °C</li>
                    <li className='tempf'>{"Temp_F " + data.current.temp_f} °F</li>
                    <li className='humidity'>{"Humidity " + data.current.humidity + "%"}</li>
                    <li className='windirec'>{"Wind_Direction " + data.current.wind_dir}</li>
                </ul>
            </div>
        </div>
        }
    </div>
  )
}

export default CurrentTime
