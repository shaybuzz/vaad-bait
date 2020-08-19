import React from 'react';
import MessageComp from './MessageComp';
import FiltersComp from "./FiltersComp";


function MessagesPage(props){
    const {messages} = props;
    let allMsg = messages.map(msg => <MessageComp message={msg}/>)


    return <div>
        mesages page
       <FiltersComp/>
        {allMsg}
    </div>

}

export default MessagesPage