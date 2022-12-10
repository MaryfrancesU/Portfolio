import React from 'react';
import './DesktopRoad.scss';

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
                    <a href="/experience"> <div className='circle'> Experience </div> </a>
                </td>
                <td> </td>
            </tr>

            <tr>
                <td> </td>
                <td> </td>
                <td> 
                    <a href="/projects"> <div className='circle'> Projects </div> </a>
                </td>
            </tr>

            <tr>
                <td> Stick Figure  </td>
                <td> 
                    <a href="#"> <div className='circle'> About Me </div> </a>
                </td>
                <td> </td>
            </tr>

        </table>
  )
}

export default DesktopRoad;