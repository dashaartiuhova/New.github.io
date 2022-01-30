import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import DropDown from "./DropDown";

class BorrowerInformation extends Component{
    state={
        borrowerName:'',
        borrowerPhone:'',
        borrowerWorkPhone:'',
        borrowerAddres:'',
        confidantName:'',
        confidantPhone:''

    }
    handleSubmit(event) { 
        event.preventDefault();
        console.log(this.state);
       
    }
    render(){
        this.handleSubmit = this.handleSubmit.bind(this);
        return(
            <div className="mt-5">
                
                <div className="position-relative d-flex choose-auto" >
                    <p className="position-absolute blue f-24 fw-bold numerus">02</p>
                    <div className=" f-24 dark ">Информация о заёмщике</div>                    
                </div> 
                <form onSubmit={this.handleSubmit} > 
                    <div className="row g-3 mt-3 justify-content-between">
                        
                            <Input col={'col-lg-6 col-md-12 col-xs-12 '} type={'text'} updateValue={(e)=>{this.setState({borrowerName:e})}} text={'Полное ФИО'} />
                            <Input col={'col-lg-3 col-md-6 col-xs-12'}type={'text'}updateValue={(e)=>{this.setState({borrowerPhone:e})}} text={'Мобильный телефон'} />
                            <Input col={'col-lg-3 col-md-6 col-xs-12'}type={'text'}updateValue={(e)=>{this.setState({borrowerWorkPhone:e})}} text={'Рабочий телефон'} />
                            <Input col={'col-sm-12 '}type={'text'}updateValue={(e)=>{this.setState({borrowerAddres:e})}} text={'Адрес фактического проживания '} />
                        
                    </div>
                    <div className="position-relative d-flex choose-auto mt-5 mb-3" >
                        <div className=" f-24 dark ">Доверенные лица</div>                    
                    </div> 
                    <div className="row g-3">
                        <Input type={'text'}updateValue={(e)=>{this.setState({confidantName:e})}} col={'col-lg-6 col-md-6 col-xs-12 '} text={'ФИО'} />
                        <Input type={'text'} updateValue={(e)=>{this.setState({confidantPhone:e})}}col={'col-lg-3 col-md-6 col-xs-12'} text={'Мобильный телефон'} />
                        <div className="col-lg-3 col-md-12 col-xs-12">
                            <DropDown title='Кем приходится' items={[{name:'Родственик',value:'1'},{name:'Друг',value:'2'}]} selectItem={()=>{return null}}/>
                        </div>
                        
                    </div>
                    <div className="row g-3 justify-content-between my-5 align-items-center">
                        <div className="light   col-sm-12 col-md-6 my-2 text-center">Отправляя заявку вы соглашатесь с условями обработки <a className="blue text-decoration-underline"> персональных данных</a></div>
                        <Button type='submit' classes = {'white bg-red px-4 col-md-3 col-sm-12 '} text={'Отправить заявку'} />
                    </div>
                </form>
            </div>
        )
    }
}
export default BorrowerInformation;