import React from "react";
import { geolocated } from "react-geolocated";

function Geoloc(props) {
    return props.isGeolocationAvailable ? (
        props.isGeolocationEnabled ? (
            props.coords ? (
                <div>
                    <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
                    <h3 style={{ color: "red" }}>
                        Current latitude and longitude of the user are:
                    </h3>
                    <ul>
                        <li>Latitude: {props.coords.latitude}</li>
                        <li>Longitude: {props.coords.longitude}</li>
                    </ul>
                </div>
            ) : (
                <h1>Getting the location data...</h1>
            )
        ) : (
            <h1>Please enable location on your browser.</h1>
        )
    ) : (
        <h1>Please update or change your browser.</h1>
    );
}

// Wrap the Geoloc component using the geolocated HOC
export default geolocated()(Geoloc);
