import React from "react";
import car from '../images/smallcar.png';
import karso from '../images/karso.png';
import Button from "./Button";
import woman from '../images/woman.png';
import Footer from "./Footer";

export default function ContactUs() {
    return(
        <div className="bg-blue mt-5 position-relative contact pt-5">
            <div className="container py-5 d-flex">
                <div className="col-sm-5 col-xs-12">
                    <img src={karso} className="my-5" />
                    <div className="white  f-42 f-bolder   my-4">Защити себя от расходов на ремонт автомобиля</div>
                    <div className="f-24 white  my-4 mb-5">Гарантия Karso – лучшая защита авто от поломок на дорогах для авто с пробегом</div>
                    <Button classes={'bg-red white mt-4 px-3'} text={'Заказать консультацию'}/>
                </div>
                <div className="col-sm-7 justify-content-end position-absolute end-0 col-xs-12">
                   <img src={car} width={'100%'} className="my-5" /> 
                </div>
            </div>
            <div className="d-flex mt-5">
                <img src={woman} width={'40%'}  />
                <div className="d-flex flex-column justify-content-center">
                    <div className="white  f-42 f-bolder col-sm-7  lh-2 my-4">Остались вопросы? Напишите нам</div>
                    <div className="f-18 white  my-3 mb-5">Оставьте заявку и наши менеджеры свяжуться с Вами, чтобы обсудить все вопросы</div>

                    <div className="input-group mb-3 ">
                        
                        <input type="text" className="b-left p-3 px-4 form-control " placeholder="Ваш телефон" />
                        <input type="text" className=" form-control" placeholder="Ваше имя" />
                        <Button classes={'bg-red white  px-4 input-btn'} text={'Оставить заявку'}/>
                    </div>
                    <div className="form-check my-4">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label white" >
                            Я согласен с политикой обработки <a className="text-decoration-underline white">персональных данных</a>
                        </label>
                    </div>
                </div>
            </div>
            <div className={'position-relative'}>
        <Footer />
      </div>
        </div>
    )
    
} 