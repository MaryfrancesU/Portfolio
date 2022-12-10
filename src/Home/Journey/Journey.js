import './Journey.scss';
import React from 'react';
import {useState, useEffect} from 'react';
import MobileRoad from './MobileRoad/MobileRoad';
import DesktopRoad from './DesktopRoad/DesktopRoad';

const Journey = () => {

    const [isMobile, setIsMobile ] = useState(true);

    useEffect(() => {
      setIsMobile(true);
    }, [])
    

    return (
        <div>
            {isMobile 
            ? <MobileRoad />
            : <DesktopRoad />}
        </div>
    )
}

export default Journey;