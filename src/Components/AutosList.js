import React, {Component} from "react";
import AutoCard from "./AutoCard";

class AutosList extends Component{
    selectCar=(e,p)=>{
        this.props.selectCar(e,p)
    }
    render(){
        let length=''
        if(this.props.data.length===0)
            length='Автомобилей не найдено';
        else if(this.props.data.length===1)
            length='Найдено 1 автомобиль';
        else if(this.props.data.length>=2 && this.props.data.length<=4)
            length=`Найдено ${this.props.data.length} автомобиль`;
        else 
            length=`Найдено ${this.props.data.length} автомобилей`;

        return(
            <div>
                <div className="f-18 mt-5 dark-grey">{length}</div>
                <div className="row row-cols-1 row-cols-xs-1 row-cols-md-2 g-3 mt-2 mb-4">
                    {this.props.data.map((item)=>
                        <AutoCard key={item.autoData.autoId} id={item.autoData.autoId} img ={item.photoData.seoLinkM}selectCar={(e,p)=>this.selectCar(e,p)}  name={`${item.markName} ${item.modelName}`} price={item.UAH} year={item.autoData.year}
                            gearBox={item.autoData.gearboxName}   />
    )}
                </div>
            </div>
        )
    }
    
}
export default AutosList;