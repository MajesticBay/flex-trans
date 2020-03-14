import React from 'react';
// import { createContext } from 'react';

export const reservationFormContext = React.createContext({
    addressPick:"",
    setAddressPick: () => {},
});

// export const reservationProvider = reservationFormContext.Provider
// export const reservationContext = reservationFormContext.Context


// export default reservationFormContext;



export default ({ children }) => {
    const [addressPick, setAddressPick] = React.useState("bbbb");
    const [coordinatesPick, setCoordinatesPick] = React.useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = React.useState("");

    const [addressDrop, setAddressDrop] = React.useState("cccc");
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
        addressPickContext: [addressPick, setAddressPick],
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
        buildingInfoPick: [buildingInfoPick, setBuildingInfoPick],
        addressDrop: [addressDrop, setAddressDrop],
        coordinatesDrop: [coordinatesDrop, setCoordinatesDrop],
        buildingInfoDrop: [buildingInfoDrop, setBuildingInfoDrop],
        date: [date, setDate],
        time: [time, setTime],
        passengerInfo: [passengerInfo, setPassengerInfo],
        addressPick,
        setAddressPick
    }
    

return <reservationFormContext.Provider value={reservationForm}>{ children }</reservationFormContext.Provider>
}


