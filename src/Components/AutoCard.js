import React, {Component} from "react";
import auto from '../images/Rectangle 51.png'
import sign from "../images/surface.png"
import check from "../images/check.png"

class AutoCard extends Component{
    state={
        isChecked:this.props.isChecked ? true:false
    }
    toggleBox = () => {
        this.props.selectCar(this.props.id,this.props.price);
        this.setState(prevState => ({ isChecked: !prevState.isChecked }));
      };
    render(){
        const border = this.state.isChecked ? 'border-blue':'border border-top-0';
        const checkArea = this.state.isChecked ? 'back-blue white':'back-grey';
        const checkMark = this.state.isChecked ? 'bg-white border-0':'back-grey';
        const checkImg  = this.state.isChecked ? '':'d-none';
        return(
            <div className="col pointer" onClick={this.toggleBox}>
                <div className="card auto-card" >
                    <img src={this.props.img}  className="card-img-top" alt="..."/>
                    <div className={`card-body br-bottom  ${border}`}>
                        <p className="light f-16">{this.props.year} год / {this.props.gearBox}</p>
                        <p className="blue f-18 fw-bold"> {this.props.name} {this.props.year} года</p>
                        <div className="d-flex justify-content-between">
                            <div className="light  f-18">{this.props.price} ₴</div>
                            <div className="light f-400  f-14">от 15 000 ₴ / мес.</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="blue fw-bold f-24">{this.props.price} ₴<img className="mx-2 sign" src={sign}  alt="..."/></div>
                            <div className="blue f-bolder f-14 ">от 15 000 ₴ / мес.</div>
                        </div>
                        <div className={`d-flex justify-content-between b-10 align-items-center p-4 mt-3 + ${checkArea}`}>
                            <div className="  f-16">{this.state.isChecked ? 'Выбрано это авто':'Выбрать это авто'}</div>
                            <div className={`check-mark + ${checkMark}`}> <img src={check}  className={`card-img-top m-auto + ${checkImg}`} alt="..."/></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default  AutoCard;