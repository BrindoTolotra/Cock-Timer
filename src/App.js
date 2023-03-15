import {useState } from "react";
import "./App.css";
import {MyClock} from "./components/MyClock"
import { Mytimer } from "./components/Mytimer";

function TodayDate({ isVisible }) {
  return (
    <>
      <p>{isVisible && <MyClock/>}</p> 
      <p>{!isVisible && <Mytimer/>}</p>
      <br />
    </>
  );
}

function App() {
  const [isVisible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!isVisible); 
  
  return (
        <>
        <TodayDate isVisible={isVisible} />
        {isVisible && <button onClick={toggleVisibility}>Timer</button>}
        {!isVisible && <button onClick={toggleVisibility}>Clock</button>}
        </>
  );
}

export default App;
