
import { useState } from 'react';
import { MyClock } from './components/MyClock';
import { Mytimer } from './components/Mytimer';
import './App.css'
function ButtonChange(props){
  const {className} = props;
  const [state, setState] = useState(<MyClock/>);
  const changeTimer = () =>{
    setState(<Mytimer/>)
  }
  const changeClock = () =>{
    setState(<MyClock/>)
  }
  return(
    <>
    <p>{state}</p>
    <button onClick={changeTimer} type="button" className={className}>Timer</button> 
    <button onClick={changeClock} type="button" className={className}>Clock</button>
    </>
  )
}

function App() {
  
  return (
    
    <ButtonChange className="btn btn-primary"/>
  );
}

export default App;
