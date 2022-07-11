import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './popup.css'
import close from './close.png';
import Receive from './receive.png';
import Convert from './converts.png';
import Send from './send.png';
import { Button } from 'bootstrap';
function Popup() {
    const handlechange = () => {
        console.log("hello");
    }
    

    return (
        <div>
        <div className='row back7'>
            <div className='col-11'>
            <div className='col-'></div>
            <div className='col-9 transiction'>Confused what to trade?
                </div>
                <div className='col-12 transiction'>checkout top10 crypto movers</div>
                
                </div>
                <div className='col-1'>  
                <img src={close}></img>
                </div>
                

             </div>
             <div className='row back9'>
                <div className='col-2'>
                <img src={Convert}></img>
                </div>
                <div className='col-10'>
            <div className='col-1 transiction'>Convert
                </div>
                
                <div className='col-11 transiction'>Simply convert one crypto to another

                </div>
                </div>
                </div>
             <div className='row back9'>
             <div className='col-2'>
             <img src={Send}></img>
                </div>
                <div className='col-10'>
            <div className='col-1 transiction'>Send
                </div>
                <div className='col-11 transiction'>Send crypto to another wallet
                </div>
                </div>
                </div>


             <div className='row back9'>
             <div className='col-2'>
                <img src={Receive}></img>
                </div>
                <div className='col-10'>
            <div className='col-1 transiction'>Recieve
                </div>
                <div className='col-11 transiction'>Receive crypto to your own wallet
                </div>
                </div>

             </div>
             
                 </div>
    );
}

export default Popup;
