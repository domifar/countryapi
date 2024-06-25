const LocationInput = ({onChange}) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return(
        <div>
            <label>Ort: </label>
            <input onChange={handleChange}/>
        </div>
    )
}

export default LocationInput