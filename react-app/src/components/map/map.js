import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '418px',
    borderRadius: '25px'
};


const Maps = ({ apiKey, resort }) => {
    const [selectedMarker, setSelectedMarker] = useState(false)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const center = {
        lat: resort?.lat,
        lng: resort?.lng,
    };
    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker
                        position={{ lat: parseFloat(resort?.lat), lng: parseFloat(resort?.lng) }}
                        onClick={() => setSelectedMarker(!selectedMarker)}
                    >
                        {(selectedMarker && resort?.id) ? (
                            <InfoWindow>
                                <div id='map-pointer-display'>
                                    <p>{resort?.name}</p>
                                    <p>{formatter.format(resort?.price)} per night</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);