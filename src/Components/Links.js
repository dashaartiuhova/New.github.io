import React, {useState} from "react";
import down from '../images/down.png';
import up from '../images/up.png';
 export default function  Links(props) {
     const[display,setDisplay]=useState(false);
     return(
         <div >
            <h5 className={`f-24 mb-4 align-items-center d-flex ${display&& 'blue'}`} onClick={()=>setDisplay(!display)}>{props.title} 
                <img className={`down ${display&& 'd-none mx-2'}`} src={down}/>
                <img className={`up ${display&& 'd-block mx-2'}`} src={up}/>
            </h5>


            <ul className={`list-unstyled footer-links ${display&& 'd-block'} text-small`}>
                {props.links.map((item,index)=>
                    <li key={index} className="mb-1"><a className="light-link  text-decoration-none" href="#">{item} </a></li>
                )}
            </ul>
         </div>
     )
     
 }