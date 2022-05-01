import React from 'react'
import ReactDOM from 'react-dom';

function Header(){
    return(
        <div>
            <h1>
                react is library in javascript which
                was created by faccebook and it is 
                runing successful today
            </h1>
        </div>
    )
}
ReactDOM.render(<Header/>,document.getElementById('root'))
