import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

// ReactHook
function ReactHooks(){
    const[count,updatecount] =useState(0);
    useEffect(()=>{
        alert("hello react js")
    })
    return(
        <div>
            <p>
                you clicked the below button {count} times
            </p>
            <button onClick={()=> updatecount(count + 1)}>click
             </button>
        </div>
    )
}
ReactDOM.render(<ReactHooks/>,document.getElementById('root'));
