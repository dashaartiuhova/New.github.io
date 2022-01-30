import React from "react";
import bank1 from '../images/bank1.png';
import bank2 from '../images/bank2.png';
import bank3 from '../images/bank3.png';
import bank4 from '../images/bank4.png';
import bank5 from '../images/bank5.png';
import bank6 from '../images/bank6.png';
import bank7 from '../images/bank7.png';
import bank8 from '../images/bank8.png';
import bank9 from '../images/bank9.png';
import bank10 from '../images/bank10.png';
import bank11 from '../images/bank11.png';
import bank12 from '../images/bank12.png';


export default  function Banks() {
    return (
        <div className="">
            <div className="dark f-42 f-700 col-sm-6 col-xs-12 my-3">Crystal motors - партнёр 15 банков</div>
            <div className="f-20 light col-sm-5 col-xs-12 my-4">Оказываем услуги по автокредитованию. Это позволяет оперативно получать лучшие предложение по кредитам.</div>
            <div className="grid my-5">
                <div className="child"><img src={bank1}/></div>
                <div className="child"><img src={bank2}/></div>
                <div className="child"><img src={bank3}/></div>
                <div className="child"><img src={bank4}/></div>
                <div className="child"><img src={bank5}/></div>
                <div className="child"><img src={bank6}/></div>
                <div className="child"><img src={bank7}/></div>
                <div className="child"><img src={bank8}/></div>
                <div className="child"><img src={bank9}/></div>
                <div className="child"><img src={bank10}/></div>
                <div className="child"><img src={bank11}/></div>
                <div className="child"><img src={bank12}/></div>
            </div>
        </div>
    )
    
}