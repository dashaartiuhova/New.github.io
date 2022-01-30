import React from "react";
import cards from '../images/cards.png';
import proc from '../images/proc.png';
import Button from "./Button";

export default function CreditTypes(){
 return(
     <div >
        <div className="dark  f-42 f-700 col-sm-5 col-xs-12 my-3">Кредит под любые условия со ставкой от <span className="blue">7,4%</span> </div>
        <div className="f-20 light col-sm-5 col-xs-12 my-4">Наш опытный специалист по подбору авто и автокредитов обезопасит от любых «сюрпризов» </div>
        <div className="d-flex row g-3">
            <div className="col-sm-6">
                <div className="b-20 border p-5 my-5 ">
                <div className="d-flex">
                    <div className="dark  f-42 f-700 "> Автокредит без первого взноса</div>
                        <img src={proc} className="mx-3" height={'60px'}/>
                </div>
                <div className="f-20 light  my-5">Помогаем заполнить заявки на кредит правильно для получения положительных решений от банков.</div>
                <div className="d-flex justify-content-start">
                        <Button text={'Оформить кредит'} classes={'white bg-blue  px-5'}/>
                        <button className="border btn f-bolder border-dark  px-5 b-20 py-3 mx-2 pointer dark">Подробнее</button>
                </div>
                </div> 
            </div>
           <div className="col-sm-6">
               <div className="b-20 border p-5 my-5 ">
               <div className="d-flex">
                   <div className="dark  f-42 f-700 "> Автокредит с первым взносом</div>
                    <img src={cards} className="mx-4" height={'60px'}/>
               </div>
               <div className="f-20 light  my-5">Заявка с первоначальным взносом для одобрения и получения кредита на выгодных для Вас условиях.</div>
               <div className="d-flex justify-content-start">
                    <Button text={'Оформить кредит'} classes={'white bg-blue  px-4'}/>
                    <button className="border btn f-bolder border-dark  px-5 b-20 py-3 mx-2 pointer dark">Подробнее</button>
               </div>
            </div> 
           </div>
            
        </div>
        
     </div>
 )
}