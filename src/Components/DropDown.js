import React, {Component} from "react";
import arrow from "../images/arrow_down.png"

class DropDown extends Component{

    state={
        isVisible:false,
        selected:'Выбрать'
    }
    toggleBox = () => {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
    };
    select=(name)=>{
        this.setState({selected:name});
    };
    render(){
        
        const display = this.state.isVisible ? 'd-block':'d-none';
        
        return(
            <div className={` pointer position-relative ${this.props.classes} d-flex align-items-center
                                justify-content-between border border-2 input py-2 px-3`} onClick={this.toggleBox}>
                <div className="d-flex flex-column">
                    <div className="light font-12">{this.props.title}</div>
                    <div className="font-16">{ this.state.selected}</div>
                </div>
                <img className='arrow-down ' src={arrow} alt="arrow"/>
                <div className={`drop ${display}`}>
                    <ul className = "list-group">
                        {this.props.items.map((item) =>
                            <li key={item.value} onClick={(e)=>{this.select( item.name, e); this.props.selectItem(item.value)}} className="f-16 list-group-item list-group-item-action">{item.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default DropDown