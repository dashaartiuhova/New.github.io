import React from "react";
import Range from './Range';
import Button from './Button';

export default function Selection() {
    return(
        <div className="">
            <div className="dark f-42 f-700 col-sm-6 col-xs-12 my-3">Подбор автомобиля под условия кредита</div>
            <div className="f-20 light col-sm-5 col-xs-12 my-4">Выберите автомобиль под свои возможности из нашего автопарка на выгодных для Вас условиях</div>
            <div className="b-20 border p-5 my-5">
                <Range changeRange={()=>{return null}} styleValue = {'f-24'}znachType={'money'}
                    from={0} to={3000000} divisions={['0', '500 000', '1 000 000','1 500 000','2 000 000','2 500 000','3 000 000']} title={'Желаемая сума кредита'}/>
                <div className="row ">
                    <div className="col-sm-6">
                        <Range styleValue={'f-18'} changeRange={(e)=>{return null}}
                            znachType={'time'} from={0} to={60} divisions={['0', '1 год','2 года','3 года', '4 года', '5 лет']} title={'Желаемый срок кредита'}/>
                    </div>
                    <div className="col-sm-6">
                        <Range styleValue={'f-18'} changeRange={()=>{return null}} znachType={'%'} from={0} to={50} divisions={['0 %', '10 %','20 %', '30 %','40 %', '50 %']} title={'Первый взнос'}/>
                    </div>

                </div>
                <div className="d-flex justify-content-around mt-5">
                    <Button text={'Показать предложения'} classes={'white bg-blue m-auto px-4'}/>
                </div>
            
            </div>
        </div>
    )
}
