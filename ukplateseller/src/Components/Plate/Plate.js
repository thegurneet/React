import React,{useState} from 'react';
import style from './Plate.css'
import { genericTypeAnnotation } from '@babel/types';


const Plate = ({plate,price,available}) => {

    const [availablity, setAvailablity] = useState('Available');
    const [colorG, setColor] = useState('green')

   const style = { 
    display: 'inline-block',
    margin: '15px 20px 20px 20px',
    width: '70px',
    color: 'white',
    height: '30px',
    backgroundColor: 'green',
    border: '1px solid blue',
    padding: '8px', 
    cursor: 'pointer'
   }


   let detail = { 

        float: 'left',
        width: '25%',
        padding: '15px',
        color: colorG,
        fontWeight: '900'
   }

   let a = 0;

    const toggleBuyHandler = () => {
        if( a == 0){
            setAvailablity('SOLD!')
            setColor('red')
            a = 1;
        } else {
            setAvailablity('AVAILABLE')
            setColor('green')
        }
    }

    return(

    <div className='box'>
        <div className="outerplateBox"> 
            <div className="platebox"> 
                <h1> {plate} </h1>
            </div>           

            <div>
                <div style={detail}>
                    <p> {availablity} </p>
                </div>
                <div className="detail">
                    <p> <a className='price'> PRICE:   </a> £ {price} </p>  
                </div>
                <div className="detail">
                    <button     
                    style= {style}
                    onClick={toggleBuyHandler}> BUY </button>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Plate;