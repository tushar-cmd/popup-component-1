import React from "react";
import './Home_page.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';
import dollar from './dollar.png';
import polygon from './polygon.png';
import home from './home.png';
import orders from './orders.png';
import portfolio from './portfolio.png';
import reverse from './reverse.png';
import wallet from './wallet.png';
import new_img from './new_img.png';
import refresh from './refresh.png';
import Popup from "./popup";
import { createContext, useEffect, useState } from "react";


function Bottom_bar() 
{
    const [PopupOpen, setPopupOpen] = useState(false);
  return (
    <div>
    {PopupOpen && <Popup closebtn={setPopupOpen} />}
    <div className='row bottom_bar'>
      
    <div className='col-2 home_image'>
        <img src={home}></img>

    </div>
    <div className='col-1'></div>
    <div className='col-1'>
        <img src={orders}></img>
        
    </div>
    <div className='col-1'></div>
    <div className='col-2 reverse_image'>
        <button
        onClick={() => {
          setPopupOpen(true);
          
        }}>
        <img src={reverse} className='swapss'></img>
        </button>   

    </div>
    
    <div className='col-1'></div>
    <div className='col-2'>
        <img src={portfolio}></img>
    </div>
    <div className='col-2 wallet_image'>
        <img src={wallet}></img>
    </div>
    
</div>

 </div>

  )
  }

export default Bottom_bar;


