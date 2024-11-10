import React, { useState } from 'react'
import './App.css';

const Bmi = () => {
    const[height,setHeight]=useState('');
    const[weight,setWeight]=useState('');
    const[bmi,setBmi]=useState('');
    const[message,setMessage]=useState();
    const calculateBmi=()=>{
        const heightIncm=parseFloat(height)/100;
        const weightInkg=parseFloat(weight);
        if((heightIncm && weightInkg)>0){
            const bmi=weightInkg/(heightIncm*heightIncm);
            setBmi(bmi.toFixed(2));
        }
        else{
            setBmi('please enter the valid number');
        }
        if(bmi<=0 && bmi>=0){
            setMessage("you are overless");
        }
        else if(bmi<=20 && bmi>40){
            setMessage("you are sick");
        }
        else if(bmi<=40 && bmi>60){
            setMessage('you are normal');
        }
        else if(bmi<=60 && bmi>80){
            setMessage("you are message");
        }
        else if(bmi<=80 && bmi>100){
            setMessage("you are overweight");
        }
        else
        {
            setMessage("you are obesity");    
        }
    }

  return (
    <div>
      <div className='container'>
        <div class="display">
            <label>Enter the height(in cm)</label>
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className='display'>
            <label>Enter the weight(in kg)</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div className='display'>
            <button onClick={calculateBmi}>Bmi</button>
            <p>{bmi}</p>
            <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Bmi
