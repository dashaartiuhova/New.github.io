import React, {Component} from "react";

class Range extends Component  {
    
    
    state={
        inputValue:'1'
    }

    update=(env)=>{
        this.props.changeRange(env.target.value);
        this.setState({inputValue:env.target.value})
    };

    time=(x)=>{
        var y,m,years, months;
        years = Math.round(x/12);
        months =x%12;
/* 
         при ділені х на 12, коли х=6, видає 1????
         
        console.log(years,months);
*/

        if(years === 0)
            y =''
        else if(years === 1)
            y='год'
        else if(years >= 2 && years <=4)
            y='года'
        else 
            y='лет'

        if(months === 0)
            m =''
        else if(months === 1)
            m='месяц'
        else if(months >= 2 && months <=4)
            m='месяца'
        else 
            m='месяцев'

        if(months===0)
            months=''
        if(years===0)
            years=''
        const value = `${years} ${y} ${months} ${m}`;
        return value;            
        
    }
     numberWithSpaces=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    render(){
        if(this.props.znachType === 'time')
            var value = this.time(this.state.inputValue);
        else if(this.props.znachType === '%'){
            
            if(this.state.inputValue===0)
                var value = `Без первого взноса`;
            else
                var value = `${this.state.inputValue} %`;
        }            
        else if(this.props.znachType === 'money')
            var value = `${this.numberWithSpaces(this.state.inputValue)} ₴`;

        
        return(
            <div>
                <div className="f-18 mt-5 light">{this.props.title}</div>
                <div className={`blue fw-bold  my-4 ${this.props.styleValue}`}>{value}</div>
                <input type={"range"} className="mb-4 w-100" value={this.state.inputValue}  min={this.props.from} onChange={this.update} max={this.props.to}/>
                <div className="d-flex justify-content-between">
                    {this.props.divisions.map((item,index)=>
                        <div key={index} className="light f-16">{item}</div>
                    )}
                </div>
            </div>
        )
    }
}
export default  Range;