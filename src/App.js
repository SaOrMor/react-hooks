import React , {useState} from "react";
import { UseForm } from "./UseForm";
import {Hello} from "./Hello"

const App = () => {
  const [count,setCount] = useState(1);
  const [count2,setCount2] = useState(5);

  const [values, handleChange] = UseForm({email: '', password: ''});
  const [showHello, setShowHello] = useState(true);

  
  // React.useEffect(() => {
        
  //   console.log("render");

  //   const onMouseMove = e => {
  //       console.log(e, "attention mouse moving")
  //   }

  //   window.addEventListener('mousemove', onMouseMove)
    
  //       // inserting cleanup function, unmount
    
  //       return() => {
  //         console.log("unmount");

  //         window.removeEventListener("mousemove", onMouseMove)
  //       }
  //     }, []);





  return (
    <div> 

    <button onClick={() => setShowHello((!showHello))}> Toggle Hello </button>
    {showHello && <Hello />}

     <button onClick={() => 
     {setCount( c => c + 1);
      setCount2(c => c +1);
     }}
     >  
     + 
     </button>
     

     <button onClick={() =>{
       setCount(c => c - 1);
       setCount2(c => c - 1);
     }}> - </button>
     
     <div> Count uno == {count}</div>
     <div> Count due == {count2}</div>

     <input name='email' 
     value={values.email} 
     onChange={handleChange}/>


     <input type='password' name='password' 
     value={values.password} 
     onChange={handleChange}/>
    </div>

  )
}



export default App;
