import '../App.css';
import Brands from './Brands';
import Header from './HeaderWhite';
import Steps from './Steps';
import Top from './Top';
import Selection from './Selection';
import CreditTypes from './CreditTypes';
import Banks from './Banks';
import Button from './Button';
import computer from '../images/computer.png';
import car from '../images/sedan.png';
import elipse from '../images/elipse.png';
import ContactUs from './ContactUs';
import Application from './Application';
import Footer from './Footer'
import {BrowserRouter, Routes,Route, Link} from "react-router-dom"

function MainPage() {
  return (
    <div>
      <Header/>

      <Top />
      
      <div className='container position-relative'>
        <Steps />
        <Brands/>
        <Selection/>
        <CreditTypes/>
        <Banks/>
        <div className='bg-blue b-20 d-flex justify-content-between my-5'>
          <div className=' p-5 align-items-center m-auto'>
            <div className='f-42 white f-bolder '>Оформи заявку онлайн и получи решение через 10 минут</div>
            <Button classes={'bg-red white mt-4 px-4'} text={'Подать заявку'}/>
          </div>
          <img src={computer}/>
        </div>

        <div className='my-5'>
          <div className="dark  f-42 f-700 col-sm-5 col-xs-12 my-3">Трейд-ин с доплатой в кредит  <span className="blue">от 7,4%</span> </div>
          <div className="f-20 light col-sm-5 col-xs-12 my-4">Проведем оценку и зачтём авто как первый взнос по кредиту. </div>
          <Button text={'Оставить заявку'} classes={'white bg-blue  px-5 my-5'}/>
          <button className="border btn f-bolder border-dark  px-5 b-20 py-3 mx-2 pointer dark">Подробнее</button>
          <div className='position-relative'>
            <img src={elipse } className='elipse' width={'50%'} />
            <img  className='sedan' src={car} width={'90%'}/>
            <div className='round round-1 f-24 white py-5 d-flex text-center'>
              <div className='m-auto f-bolder'>Оформление всех документов в день сделки</div> 
            </div>
            <div className='round round-2 f-24 white py-5 d-flex text-center'>
              <div className='m-auto f-bolder'>Получение авто в день сделки</div> 
            </div>
          </div>
        </div>
      </div>
      
      <ContactUs />
      
    </div>
  );
}

export default MainPage;