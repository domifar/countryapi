import './App.css'
import { useEffect, useState } from 'react'
import { getLocation } from './services/open-meteo.service'
import LocationInput from './components/LocationInput'
import Flag from './components/Flag'

function App() {
  const [Result, setResult] = useState([])

  useEffect (() => {
    getLocation('')
    .then((response) => {
      setResult(response)
      console.log(response)
    })
  }, [])

  const handleChange = (value) => {
    getLocation(value)
    .then((response) => {
      setResult(response)
      console.log(response)
    })
  }

  return (
    <>
      <form>
        <LocationInput onChange={handleChange}/>
      </form>
      <ul className='locations'>
        {Result.map(res =>
          <li className='location-item' key={res.id}>
            <Flag countryCode={res.country_code}/>
            <span className='countryName'>City: {res.name},</span>
            {/* <div style={{margin: "0 10px 0 10px"}}></div> */}
            <span>Country: {res.country}</span>
          </li>
        )}
      </ul>
    </>
  )
}

export default App