import React from "react";
import arow from '../images/Vector.png';

export default function Brands() {

    return(
        
        <div className="my-5 py-4">
            <div className="d-flex my-5 align-items-center justify-content-between">
               <div className="f-42 f-700 dark ">Выбери авто и поехали</div> 
               <div className="f-18 light">Смотреть все марки <img src={arow}/></div>
            </div>
            
            <div className="row row-cols-2  row-cols-md-4 row-cols-lg-6 g-3">
                <div className="f-18 dark d-flex align-items-center">Acura <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">22</div></div>
                <div className="f-18 dark d-flex align-items-center">Audi <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">87</div></div>
                <div className="f-18 dark d-flex align-items-center">BMW <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">65</div></div>
                <div className="f-18 dark d-flex align-items-center">BYD <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">32</div></div>
                <div className="f-18 dark d-flex align-items-center">Chery <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">53</div></div>
                <div className="f-18 dark d-flex align-items-center">Chevrolet <div className="bg-grey b-9 mx-2 f-18 px-3 py-2">25</div></div>
                <div className="f-18 dark d-flex align-items-center">Chryster <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">31</div></div>
                <div className="f-18 dark d-flex align-items-center">Citroen <div className="bg-grey b-9 f-18 mx-2 px-3 py-2">45</div></div>
                <div className="f-18 dark d-flex align-items-center">Daewo <div className="bg-grey b-9 f-18 px-3 mx-2 py-2">20</div></div>
                <div className="f-18 dark d-flex align-items-center">Daihatsu <div className="bg-grey b-9 f-18 px-3 mx-2 py-2">23</div></div>
                <div className="f-18 dark d-flex align-items-center">Datsun <div className="bg-grey b-9 f-18 px-3 mx-2 py-2">12</div></div>
                <div className="f-18 dark d-flex align-items-center">DW hover <div className="bg-grey b-9 f-18 px-3  mx-2 py-2">6</div></div>
            </div>
            
        </div>
    )    
}