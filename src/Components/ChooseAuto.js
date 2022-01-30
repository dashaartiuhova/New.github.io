import React,{Component} from "react";
import DropDown from "./DropDown";
import AutoCard from "./AutoCard";
import AutosList from "./AutosList";
import Range from "./Range";
import Loader from "./Loader";

class ChooseAuto extends Component{

    state={
        error:false,
        brands:[],
        models:[],
        autos:[],
        brand:null,
        model:null,
        isLoadedBrands:false,
        isLoadedModels:false,
        isLoadedAutos:false,
        selectedAutoPrice:'',
        creditTerm:1,
        firstPayment:0,
        autoPrice:'',
        monthPayment:'',
        loading:false

    }

    componentDidMount(){
        fetch("https://developers.ria.com/auto/categories/1/marks?api_key=eInuSpP21aBIuA1XLjGlIgAUb1oORC9nCrbpPDAE")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoadedBrands:true,
                    brands:result
                });
            }
        ),
        (error)=>{
            this.setState({
                isLoadedBrands:true,
                error
            });
        };
    }
    selectedBrand=(id)=>{
        this.setState({
            brand:id
        });

        fetch(`http://api.auto.ria.com/categories/1/marks/${id}/models?api_key=eInuSpP21aBIuA1XLjGlIgAUb1oORC9nCrbpPDAE`)
        .then(res=>res.json())
        .then(
            (result)=>{this.setState({
                isLoadedModels:false,
                isLoadedAutos:false
            });
                this.setState({
                    isLoadedModels:true,
                    models:result
                });
            }
        ),
        (error)=>{
            this.setState({
                isLoadedModels:true,
                error
            });
        };
    }
    searchAutos=()=>{
        const {brand,model}=this.state;
        this.setState({loading:true});
        const ar=[];        
                fetch(`https://developers.ria.com/auto/search?api_key=eInuSpP21aBIuA1XLjGlIgAUb1oORC9nCrbpPDAE&category_id=1&marka_id[0]=${brand}&model_id[0]=${model}&s_yers[0]=2021&po_yers[0]=2022`)
                .then(res=>res.json())
                .then(
                    (result)=>{
                            result.result.search_result.ids.map((item)=>{
                                fetch(`https://developers.ria.com/auto/info?api_key=eInuSpP21aBIuA1XLjGlIgAUb1oORC9nCrbpPDAE&auto_id=${item}`)
                                .then(res=>res.json())
                                .then(
                                    (result)=>{
                                        this.setState({
                                            isLoadedAutos:true,
                                        });
                                        ar.push(result);
                                    }
                                ),
                                (error)=>{
                                    this.setState({
                                        isLoadedAutos:true,
                                        error
                                    });
                                }
                                this.setState({
                                    isLoadedAutos:true,
                                    loading:false,
                                    autos:ar
                                })
                            })
                        
                    }
                ),
                (error)=>{
                    this.setState({
                        isLoadedAutos:true,
                        error
                    });
                }
    }
    selectedModel=(id)=>{
        this.setState({model:id},()=>this.searchAutos());
        
    }
    selectCar=(id,price)=>{
        this.setState({selectedAutoPrice:price},()=>this.calculate(price));       
    }
    calculate=(price)=>{
        var k=price - price/100*this.state.firstPayment;
        
        var p=17;
        var a = k*(p/100/(p/100+1)-this.state.creditTerm-1);
        this.setState({monthPayment:a});
    }
    render(){
        const { error, isLoadedBrands,isLoadedModels,isLoadedAutos, brands,autos, loading } = this.state;
        
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoadedBrands) {
      return <div>Загрузка...</div>;
    } else {
        return(
            <div>
                <div className="position-relative d-flex choose-auto" >
                    <p className="position-absolute blue fw-bold f-24 numerus">01</p>
                    <div className=" f-24 dark ">Выберите авто </div>
                    
                </div>
                <div className=" col-md-6 col-sm-12 my-4 justify-content-between filters">
                    <DropDown title='Марка авто'classes={'average-width my-3'} items={brands} selectItem={this.selectedBrand}/>
                    
                    {isLoadedModels ? <DropDown classes={'average-width'} title='Модель авто' selected={false} selectItem={this.selectedModel}  items={this.state.models}/> : null}
                </div>
                {loading && <Loader/>}
                {isLoadedAutos ?  <AutosList selectCar={this.selectCar} data={autos} /> : null}
                
                <div className="row">
                    <div className="col-sm-6 col-xs-6">
                        <Range styleValue={'f-18'} changeRange={(e)=>{this.setState({creditTerm:e},  ()=>this.calculate(this.state.selectedAutoPrice))}} znachType={'time'} from={1} to={96} divisions={['1 мес', '96 мес']} title={'Желаемый срок кредита'}/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <Range styleValue={'f-18'} changeRange={(e)=>{this.setState({firstPayment:e}, ()=>this.calculate(this.state.selectedAutoPrice))}} znachType={'%'} from={0} to={50} divisions={['0 %', '50 %']} title={'Первый взнос'}/>
                    </div>
                </div>
                <hr className="hr my-5"></hr>
                <div className="row ">
                    <div className="col-lg-3 col-sm-6">
                        <div className="f-18 light">Стоимость авто</div>
                        <div className="blue fw-bold f-18 mt-2">{this.state.selectedAutoPrice}</div>
                                
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="f-18 light">Ежемесячный платёж</div>
                        <div className="blue fw-bold f-18 mt-2">{this.state.monthPayment}</div>       
                    </div>
                </div>
            </div>
        );}
    }
}
export default ChooseAuto;