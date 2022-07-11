import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home_page.css';
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
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from './NewsArticle';
import Topcoins from './Topcoins';
import Bottom_bar from './Bottom_bar';
import Popup from './popup';

export const NewsContext = createContext();
function Home_page() {
    const [data, setData] = useState();
    const [data1, setData1] = useState();

    // const apiKey = "1c31e0e165df4c1fa4137f14a41db9ca";
    useEffect(() => {
        axios
            .get(
               `https://newsdata.io/api/1/news?apikey=pub_8723b5e783532c0b629b6b9fd696dece2d01&country=in&category=technology`  
                     )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
                  )
                            .then((response) => setData1(response.data))
            .catch((error) => console.log(error));
    }, []);
    
    const handlechange = () => {
        console.log("hello");
    }

    const [swap, setSwap] = useState(false)
    function Coinb() {
      var a = true;
      setSwap(a);
    }
    console.log(data1);
    function Newsb() {
        var a = false;
        setSwap(a);
      }
  

if(swap == true){

    return (
        <div className='back3'>
            {console.log(data)}

            <div className='row top_bar'>
                <div className='col-1 polygon'>
                    <img src={polygon} onClick={() => handlechange()}></img>
                </div>
                <div className='col-10'></div>
                <div className='col-1 dollar'>
                    <img src={dollar}></img>
                </div>
            </div>
            <div>
            <div className='upper_box'>
                <div className='row upper_box_text1'>Invite and Earn $10 worth Bitcoin!</div>
                <div className='row upper_box_text2'>Earn $10 worth of BTC whenever your friend makes their first trade on dripp. </div>
                <div className='row upper_box_button'>
                    <div className='col-4 upper_box_button2'>
                        Invite Friends
                    </div>
                    <div className='col-8'></div>
                </div>
            </div>
            </div>
            <div className='row top_option'>
                 <div className='col-6  top_option_coin1 c1n' onClick={() => Coinb()}>TOP COINS</div>
                 {/* <div className='col-1'></div> */}
                 <div className='col-6 top_option_news1 c1c' onClick={() => Newsb()}>TOP NEWS</div>
             </div>
             

                                <div className='news_flex'>
                        {data1
                            ? data1.map((coin) => (
    
                                <Topcoins  data1={coin} key={coin.image} />
                            ))
                            : "Loading"}            </div>

            
            
  <Bottom_bar></Bottom_bar>
  


        </div>
    )
    }else{

        return (
            <div className='back3'>
                {console.log(data)}
    
                <div className='row top_bar'>
                    <div className='col-1 polygon'>
                        <img src={polygon} onClick={() => handlechange()}></img>
                    </div>
                    <div className='col-10'></div>
                    <div className='col-1 dollar'>
                        <img src={dollar}></img>
                    </div>
                </div>
                <div className='upper_box'>
                    <div className='row upper_box_text1'>Invite and Earn $10 worth Bitcoin!</div>
                    <div className='row upper_box_text2'>Earn $10 worth of BTC whenever your friend makes their first trade on dripp. </div>
                    <div className='row upper_box_button'>
                        <div className='col-4 upper_box_button2'>
                            Invite Friends
                        </div>
                        <div className='col-8'></div>
                    </div>
                </div>
                <div className='row top_option'>
                <div className='col-6  top_option_coin1 c1c' onClick={() => Coinb()}>TOP COINS</div>
                 <div className='col-6 top_option_news1 c1n' onClick={() => Newsb()}>TOP NEWS</div>
                 </div>
    
                <div className='row'>
                    <div className='col-6 story_heading'>Top Stories</div>
                    <div className='col-5'></div>
                    <div className='col-1'>
                        <img src={refresh}></img>
    
                    </div>
    
                </div>
                {/* <div className='back6'> */}
                <div className='news_flex'>
                        {data
                            ? data.results.map((news) => (
    
                                <NewsArticle  data={news} key={news.image_url} />
                            ))
                            : "Loading"}            </div>
    
                    
      <Bottom_bar></Bottom_bar>


    
            </div>
        )
    
    }
}


export default Home_page;