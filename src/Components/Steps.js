import React from "react";
export default function Steps() {
    return(
        <div className="mb-5">
            <div className="d-flex justify-content-around steps m-auto ">
                <div className="bg-grey b-9 f-18 px-3 py-2">01</div>
                <hr className="w-15"></hr>
                <div className="bg-grey b-9 f-18 px-3 py-2">02</div>
                <hr className="w-15"/>
                <div className="bg-grey b-9 f-18 px-3 py-2">03</div>
                <hr className="w-15"></hr>
                <div className="bg-grey b-9 f-18 px-3 py-2">04</div>
            </div>
            <div className="d-flex justify-content-around my-3">
                <div className="w-20 text-center">
                    <div className="blue f-24 f-bolder">Выбери авто</div>
                    <div className="f-16 light">Из нескольких тысяч вариантов нашего автопарка</div>
                </div>
                <div className="w-20 text-center">
                    <div className="blue f-24 f-bolder">Выбери условия</div>
                    <div className="f-16 light">Кредитования от наших партнёров</div>
                </div>
                <div className="w-20 text-center">
                    <div className="blue f-24 f-bolder">Оставь заявку</div>
                    <div className="f-16 light">На нашем сайте и дождитесь ответа банка</div>
                </div>
                <div className="w-20 text-center">
                    <div className="blue f-24 f-bolder">Приезжай за авто</div>
                    <div className="f-16 light">Вы получите Ваш новый автомобиль и все документы</div>
                </div>
            </div>
        </div>
    )
    
}