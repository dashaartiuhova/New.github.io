import React  from "react";
import waves1 from '../images/waves.png';
import waves2 from '../images/mask.png';
import car from '../images/car.png';
import card from '../images/card.jpg';
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Top(){
    let navigate = useNavigate();
    return(
            <div className=" top   bg-blue w-100 ">
                <div className="">
                    <div className=" position-absolute  top-text white ">
                        <div className="  container">
                            <div className="w-50">
                                <div className="f-64  f-bolder lh-1 my-5">Оформи автокредит и получи авто в день обращения</div>
                                <div className="d-flex justify-content-between">
                                    <div className="">
                                    <div className="f-30 f-bolder">От 1500 авто</div>
                                        <div className="f-18">В наличии в 12 городах</div> 
                                    </div>
                                    <div className="">
                                    <div className="f-30 f-bolder">До 7 лет</div>
                                        <div className="f-18">Срок погашения</div> 
                                    </div>
                                    <div className="">
                                    <div className="f-30 f-bolder">От 7,4%</div>
                                        <div className="f-18">Ставка по кредиту</div> 
                                    </div>
                                </div>
                            </div>
                            <button onClick={()=>{navigate('/application')}} type="submit" className={` border-0 bg-red white my-5 px-5 pointer b-20 py-3 pointer `}>Завка на кредит</button>
                            
                        </div>
                    </div>
                    <div className="">
                        <img src={waves1} width={'50%'}  className="wavel"/>
                        <img src={waves2} width={'50%'}   className="waver"/>
                        <img src={car} width={'50%'}   className="car-img "/>
                    </div>
                
                </div>
                
            </div>
    )
}