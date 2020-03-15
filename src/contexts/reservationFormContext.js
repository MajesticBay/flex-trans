import React from 'react';

export const reservationFormContext = React.createContext({});

export default ({ children }) => {
    const [addressPick, setAddressPick] = React.useState("");
    const [coordinatesPick, setCoordinatesPick] = React.useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = React.useState("");

    const [addressDrop, setAddressDrop] = React.useState("");
    const [coordinatesDrop, setCoordinatesDrop] = React.useState({lat: null, lng: null});
    const [buildingInfoDrop, setBuildingInfoDrop] = React.useState("");

    const [distance, setDistance] = React.useState("");

    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");

    const [passengerInfo, setPassengerInfo] = React.useState({name: null,
                                                        phone: null,
                                                        email: null,
                                                        additionalPassenger: 0,
                                                        wheelchairNeeded: false,
                                                        rideBackNeeded: false
                                                        });
    const reservationForm = {
        addressPick, setAddressPick,
        coordinatesPick, setCoordinatesPick,
        buildingInfoPick, setBuildingInfoPick,
        addressDrop, setAddressDrop,
        coordinatesDrop, setCoordinatesDrop,
        buildingInfoDrop, setBuildingInfoDrop,
        distance, setDistance,
        date, setDate,
        time, setTime,
        passengerInfo, setPassengerInfo,
        addressPick, setAddressPick
    }

return <reservationFormContext.Provider value={reservationForm}>{ children }</reservationFormContext.Provider>
}


