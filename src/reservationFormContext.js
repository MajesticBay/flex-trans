import React from 'react';

export const reservationFormContext = React.createContext(null);

export default ({ children }) => {
    const [addressPick, setAddressPick] = useState("");
    const [coordinatesPick, setCoordinatesPick] = useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = useState("");

    const [addressDrop, setAddressDrop] = useState("");
    const [coordinatesDrop, setCoordinatesDrop] = useState({lat: null, lng: null});
    const [buildingInfoDrop, setBuildingInfoDrop] = useState("");

    
}

import { createContext } from 'react';
