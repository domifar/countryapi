import { useEffect, useState } from 'react'
import { getLocation } from '../services/open-meteo.service'
import LocationInput from '../components/LocationInput'
import Flag from '../components/Flag'
import { useSearchParams } from "react-router-dom"

const Locations = () => {
    const [Result, setResult] = useState([])
    let [searchParams, setSearchParams] = useSearchParams()

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

export default Locations