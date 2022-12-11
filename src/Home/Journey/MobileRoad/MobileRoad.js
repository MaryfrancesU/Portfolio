import React from 'react';
import './MobileRoad.scss';

const MobileRoad = () => {
  return (
        <table id="mobileTable">

            <tr>
                <td>  </td>
                <td> 
                    <a href="/about"> <div className='circle'> About Me </div> </a>
                </td>
                <td> Stick Figure </td>
            </tr>

            <tr>
                
                <td> 
                    <a href="/projects"> <div className='circle'> Projects </div> </a>
                </td>
                <td> </td>
                <td> </td>
            </tr>

            <tr>
                <td> </td>
                <td> 
                    <a href="/experience"> <div className='circle'> Experience </div> </a>
                </td>
                <td> </td>
            </tr>

            <tr>   
                <td> 
                    <div className='circle italics' style={{cursor: 'default'}}> 
                        Who knows <br/> what&apos;s next <br /> on my journey? 
                    </div>
                </td>
                <td> </td>
                <td> </td>
            </tr>         

        </table>
    )
}

export default MobileRoad;