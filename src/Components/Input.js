import React, {Component} from "react";

class Input extends Component{
    state={
        isText:false
    }
    handleChange=(event)=>{
        this.props.updateValue( event.target.value);
    }
    
    render(){
        this.handleChange = this.handleChange.bind(this);
        return(
            <div className={this.props.col}>
                        <div className=" position-relative input-form  d-flex align-items-center
                                justify-content-between border border-2 w-100 input py-2  px-3" >
                            <div className="d-flex flex-column w-100">
                                <div className="light font-12">{this.props.text}</div>
                                <input onChange={this.handleChange} className="border-0 "  type={this.props.type}/>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Input;