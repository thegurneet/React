import React,{useState} from 'react';
import Plate from './Components/Plate/Plate'
import './App.css';
import image from './ukplateseller.jpg';

function App() {
  const arr = [
    {plate: 'TH6 9OSS', price: '500', available: 'Available'},
    {plate: 'G6PYU', price: '750', available: 'Available'}, 
    {plate: 'TH6 1CON', price: '250', available: 'Available'},
    {plate: 'HU57LEX' , price: '900', available: 'Available'},
    {plate: 'L23THL' , price: '850', available: 'Available'},
    {plate: 'GH05 T11N' , price: '850', available: 'Available'},
   ]; 

const [plates, setPlate] = useState(arr);


  return (
    <div className="App">
      <header className="App-header">
       UKPLATESELLER 
      </header>

      <div className="column"> 
        <img className='logo' src={image}></img>
      </div>
      <div className="column"> 
        <img className='logo' src={image}></img>
      </div>
      <div className="column"> 
        <img className='logo' src={image}></img>
      </div>
    <body> 
      {plates.map(obj =>(


      <div className="plateColumn"> 
        <Plate
        plate ={obj.plate}
        price ={obj.price}
        available={obj.available}
        ></Plate>
      </div>
      ))}
    </body>
    </div>
  );
}

export default App;
