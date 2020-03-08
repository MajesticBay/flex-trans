    import React from 'react';

export const reservationFormContext = React.createContext(null);

export default ({ children }) => {
    const [addressPick, setAddressPick] = useState("");
    const [coordinatesPick, setCoordinatesPick] = useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = useState("");

    const [addressDrop, setAddressDrop] = useState("");
    const [coordinatesDrop, setCoordinatesDrop] = useState({lat: null, lng: null});
    const [buildingInfoDrop, setBuildingInfoDrop] = useState("");

    const [date, setDate] = useState("");
    const [time, setTime] = useTime("");

    const [passengerInfo, setPassengerInfo] = useState({name: null,
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
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
        coordinatesPick: [coordinatesPick, setCoordinatesPick],
    }
}

import { createContext } from 'react';
