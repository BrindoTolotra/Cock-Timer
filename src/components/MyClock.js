
import { useEffect, useState } from "react";


export function MyClock(){
    const [hour,setHour] = useState(new Date().toLocaleTimeString());

    // function qui fait changer l'heure chaque interval de 1000ms
    const interval = () =>{
        window.setInterval(()=>{
            setHour(new Date().toLocaleTimeString());
        },1000)
    }

    // l'effet
    useEffect(()=>{
        interval();
        return function(){
            clearInterval(interval);
        }
    })

    
    
    return <>
    <body>
        <h1>{hour}</h1>
    </body>
    </>
}