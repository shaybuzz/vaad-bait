import React from 'react';
import '../App.css';
import Priority from '../model/Priority';



function MessageComp(props){
    const {message} = props;
    let priority = message.priority === Priority.Important ? <h1 className='ImportantMsg'>IMPORTANT!</h1> : <h5 className='InfoMsg'>info</h5>



    return <div >
        {priority}
        <h2>{message.title}</h2>
        <p>{message.details}</p>


    </div>

}

export default MessageComp