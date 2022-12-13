import './Journey.scss';
import React from 'react';
import {useState, useEffect} from 'react';
import MobileRoad from './MobileRoad/MobileRoad';
import DesktopRoad from './DesktopRoad/DesktopRoad';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Journey = () => {

    const { width } = useWindowDimensions();
    const [ isMobile ] = useState((width < 820) ?  true : false);

    useEffect(() => {
      console.log("isMobile " + isMobile);
    })
    

    return (
        <div>
            {isMobile 
            ? <MobileRoad />
            : <DesktopRoad />}
        </div>
    )
}

export default Journey;