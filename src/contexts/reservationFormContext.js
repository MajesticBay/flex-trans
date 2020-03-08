import React from 'react';
// import { createContext } from 'react';

export const reservationFormContext = React.createContext(null);

export default ({ children }) => {
    const [addressPick, setAddressPick] = React.useState("");
    const [coordinatesPick, setCoordinatesPick] = React.useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = React.useState("");

    const [addressDrop, setAddressDrop] = React.useState("");
    const [coordinatesDrop, setCoordinatesDrop] = React.useState({lat: null, lng: null});
    const [buildingInfoDrop, setBuildingInfoDrop] = React.useState("");

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
        addressPick: [addressPick, setAddressPick],
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
        buildingInfoPick: [buildingInfoPick, setBuildingInfoPick],
        addressDrop: [addressDrop, setAddressDrop],
        coordinatesDrop: [coordinatesDrop, setCoordinatesDrop],
        buildingInfoDrop: [buildingInfoDrop, setBuildingInfoDrop],
        date: [date, setDate],
        time: [time, setTime],
        passengerInfo: [passengerInfo, setPassengerInfo],
    }

return <reservationFormContext.Provider value={reservationForm}>{ children }</reservationFormContext.Provider>
}


