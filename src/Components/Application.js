import React from 'react'
import logo from '../images/logo.png';
import arrow from '../images/arrow_down.png';
import location from '../images/location.png';
import phone from '../images/phone.png';
import burger from '../images/burger.png';
import ChooseAuto from './ChooseAuto';
import BorrowerInformation from './BorrowerInformation';
import Footer from './Footer';
import Header from './HeaderDark';

export default function Application(){
    return(
        <div>
            <Header />
            <div className='container'>
                
                    <div className='col-6 '>
                        <h1 className='f-64 my-5 dark'>Оформление заявки на автокредит</h1>
                    </div>
                
                <ChooseAuto />
                <BorrowerInformation />
            </div>
            <Footer />
        </div>
    )
}