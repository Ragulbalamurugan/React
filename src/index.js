import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function ReactHooks(){
    const [count,updatecount] = useState(0)
    useEffect(()=>{
        alert("hello reactjs")
    })

    return(
        <div>
            <p>
                you click the above button {count} times
            </p>
            <button onClick={()=> updatecount(count + 1)}>click</button>
        </div>
    )
}
ReactDOM.render(<ReactHooks/>, document.getElementById('root'));