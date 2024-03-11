// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`


import { useEffect, useState } from "react";

export default function App() {


  const [input,setInput] = useState(0);
    const [cur1,setCur1] = useState('USD')
    const [cur2,setCur2] = useState ('EUR')
  const [ currency , setCurrency] = useState('')


  

    function hadleInput(e){
      
    

        setInput(Number(e.target.value));
      
   
       
    }
    function hadleCur(e){
      setCur1(e.target.value)
    }
  
    function hadleCur2(e){
      setCur2(e.target.value)
    }
  
    useEffect(function(){

    async function CallTheCurrency(){
      

      
      const res =  await fetch (`https://api.frankfurter.app/latest?amount=${input}&from=${cur1}&to=${cur2}`);
      const data = await res.json();
      
     console.log(data.rates[cur2])
      
     setCurrency(data.rates[cur2])
    
   
    
    }
    if ( input===0)return
    if (cur1===cur2) return setCurrency(input)

     CallTheCurrency();
    },[input,cur1,cur2])



  
    return (
      <div>
        <input type="text" value={input} onChange={hadleInput}/>
        <select value={cur1} onChange={hadleCur}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
  
        
        <select value={cur2} onChange={hadleCur2}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>{currency},{cur2}</p>
      </div>
    );
  }
  