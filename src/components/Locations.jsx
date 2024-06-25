import { useEffect, useState } from 'react'
import { getLocation } from '../services/open-meteo.service'
import LocationInput from '../components/LocationInput'
import Flag from '../components/Flag'
import { useSearchParams } from "react-router-dom"
import Map from './Map'

const Locations = () => {
    const [Result, setResult] = useState([])
    let [searchParams, setSearchParams] = useSearchParams()
    const [position, setPosition] = useState()

    useEffect (() => {
        const locationParam = searchParams.get('location')
        getLocation(locationParam)
        .then((response) => {
        setResult(response)
        })
    }, [])

    const handleChange = (value) => {
        getLocation(value)
        .then((response) => {
        setResult(response)
        })
        setSearchParams({location: value})
    }

    return (
        <>
            <form>
                <LocationInput onChange={handleChange}/>
            </form>
            <ul className='locations'>
                {Result.map(res =>
                <li className='location-item' key={res.id} onClick={() => setPosition({lat: res.latitude, lon: res.longitude})}>
                    <Flag countryCode={res.country_code}/>
                    <span className='countryName'>City: {res.name},</span>
                    {/* <div style={{margin: "0 10px 0 10px"}}></div> */}
                    <span>Country: {res.country}</span>
                </li>
                )}
            </ul>
            <Map position={position}/>
        </>
    )
}

export default Locations