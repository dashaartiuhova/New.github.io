import React from "react";
import logo from '../images/7logo.png';

import Links from "./Links";
 
export default function Footer(){
    return (
        <div >
            <div className='footer-top'>
                <div className='container py-4 light'>
                Вся информация на сайте носит справочный характер и не является публичной офертой
                </div>
            </div>
            <div className="bg-footer">
                <footer className="pt-5 container ">
                    <div className="row ">
                    <div className="col-md-3 col-xs-12">
                        <Links title={'Купить'} links={['Купить авто','Обмен авто','Онлайн оценка авто','Предпродажная подготовка','Техническая гарантия']}/>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <Links title={'Продать'} links={['Автокредит','Выкуп авто','Trade-in / Обмен авто','Онлайн оценка авто']}/>
                        
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <Links title={'Автокредит'} links={['Кредит без взноса','Кредит с первым взносом','Обмен с доплатой в кредит','Онлайн заявка на кредит']}/>
                        
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <Links title={'Автосалон'} links={['О компании','Контакты','Вакансии','Новости']}/>
                    </div>
                    </div>
                </footer>
                <hr className="my-4"></hr>
                <div className="d-flex justify-content-between align-items-center container pb-4">
                    <div className="white f-18">Crystal Motors (с) 2021</div> 
                    <div className="d-flex align-items-center">
                      <div className="light f-18 mx-3">Разработка сайта </div>  
                      <img className=" _7logo" src={logo}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}