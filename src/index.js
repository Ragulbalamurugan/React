// Reacthooks
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function ReactHooks(){
  const[count, updatecount] = useState(0);
  useEffect(()=>{
    alert('hello reactj')
  })
  return(
    <div>
     
      <button onClick={()=>updatecount(count + 1)}>
        click the button
      </button> <p>
        you clicked the above button {count} times
      </p>

    </div>
  )
}
 
ReactDOM.render(<ReactHooks/>, document.getElementById('root'))