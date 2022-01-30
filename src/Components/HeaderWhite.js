import React from 'react'
import logoW from '../images/logoW.png';
import arrowW from '../images/arrowW.png';
import locationW from '../images/locationW.png';
import phoneW from '../images/phoneW.png';
import burgerW from '../images/burgerW.png';
import { Link } from 'react-router-dom';

export default function HeaderWhite(){
    
    
        return(
            <div className='container'>
            <div className='py-3 d-flex justify-content-between white'>

            <Link to='/'><img className='pointer' src={logoW} alt=''/></Link>
                <div className=" justify-content-between menu white">
                    <a className=" text-decoration-none m-auto white  font-italic" href="">Купить</a>
                    <a className=" text-decoration-none m-auto white" href="">Продать</a>
                    <Link to='/application'className=" text-decoration-none m-auto white"  >Автокредит</Link>
                    <a className=" text-decoration-none m-auto white" href="">Контакты</a>
                </div>
                <div className='d-flex  choose-location pointer'>
                    <img className='location-icon' src={locationW} alt=''/>
                    <p className='m-auto mx-0'>Екатеринбург</p>
                    <img className='arrow-down m-auto' src={arrowW} alt=''/>
                </div>
                <div className='d-flex justify-content-between phone-number pointer'>
                    <img className='pr-2 phone-icon' src={phoneW} alt=''/>
                    <p className='m-auto '>+7 994-664-36-27</p>
                </div>
                <div className=' burger pointer'>
                    <img src={burgerW} alt=''/>
                </div>
            </div>
        </div>
        )
    
}