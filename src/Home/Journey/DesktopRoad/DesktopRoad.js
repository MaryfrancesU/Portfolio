import React from 'react';
import './DesktopRoad.scss';
import traveller from '../assets/traveller.png';

const DesktopRoad = () => {
  return (
        <table id="desktopTable">

            <tr>
                <td> </td>
                <td> </td>
                <td> 
                    <div className='circle italics' style={{cursor: 'default'}}> 
                        Who knows <br/> what&apos;s next <br /> on my journey? 
                    </div>
                </td>
            </tr>

            <tr>
                <td> </td>
                <td> 
                    <a href="/Portfolio/experience"> <div className='circle'> Experience </div> </a>
                </td>
                <td> </td>
            </tr>

            <tr>
                <td> </td>
                <td> </td>
                <td> 
                    <a href="/Portfolio/projects"> <div className='circle'> Projects </div> </a>
                </td>
            </tr>

            <tr>
                <td> <img id="stick-figure" src={traveller} />  </td>
                <td> 
                    <a href="/Portfolio/about"> <div className='circle'> About Me </div> </a>
                </td>
                <td> </td>
            </tr>

        </table>
  )
}

export default DesktopRoad;