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
}

import { createContext } from 'react';
