import React, {useState} from 'react'
import logo from '../images/logo.png';
import arrow from '../images/arrow_down.png';
import location from '../images/location.png';
import phone from '../images/phone.png';
import burger from '../images/burger.png';
import { Link } from 'react-router-dom';

export default function HeaderDark(){
    const [display, setDisplay] = useState(false);
    return(
        <div className='container'>
            <div className='py-3 d-flex justify-content-between'>

            <Link to='/'><img className='pointer' src={logo} alt=''/></Link>
                <div className={`justify-content-between menu ${display && 'd-flex'} dark`}>
                    <a className=" text-decoration-none  text-dark font-italic" href="">Купить</a>
                    <a className=" text-decoration-none  text-dark" href="">Продать</a>
                    <Link to='/application'className=" text-decoration-none  dark"  >Автокредит</Link>
                    <a className=" text-decoration-none  text-dark" href="">Контакты</a>
                </div>
                <div className='d-flex  choose-location pointer'>
                    <img className='location-icon' src={location} alt=''/>
                    <p className='m-auto mx-0 city'>Екатеринбург</p>
                    <img className='arrow-down location-arrow m-auto' src={arrow} alt=''/>
                </div>
                <div className='d-flex justify-content-between phone-number pointer'>
                    <img className='pr-2 phone-icon' src={phone} alt=''/>
                    <p className='m-auto phone-number-text'>+7 994-664-36-27</p>
                </div>
                <div className=' burger pointer'>
                    <img src={burger} onClick={() => setDisplay(!display)} alt=''/>
                </div>
            </div>
        </div>
    )
}