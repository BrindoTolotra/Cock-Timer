import { useEffect, useState } from "react";

export function Mytimer(){
    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [seconde,setSeconde] = useState(0);
    useEffect(()=>{
        const intervalTime = window.setInterval(()=>{
            if(seconde<59){
                setSeconde(s=>s+1)
            }else if(seconde==59 && min<59){
                setMin(m => m+1)
                setSeconde(s=>s=0)
            }else if(seconde==59){
                setHour(h => h+1)
                setMin(min=>min=0)
                setSeconde(s=>s=0)
            }
        },1000)
        return function(){
            clearInterval(intervalTime)
        }
    })

    return (
    <body>
        <h1>{hour}h:{min}m:{seconde}s</h1>
    </body>
    )
}