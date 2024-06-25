import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import 'leaflet/dist/leaflet.css'

const Map = ({position}) =>{
    return(
        <>
            {position && position.lat && position.lon ?
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
                    />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            : undefined}
        </>
        
    )
}

export default Map