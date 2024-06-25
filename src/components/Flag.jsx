const Flag = (props) => {
    return (
        <img width={'20px'} src={`https://open-meteo.com/images/country-flags/${props.countryCode}.svg`} alt="Flag" />
    )
}

export default Flag