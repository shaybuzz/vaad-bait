import React from 'react';
import MessageComp from './MessageComp';
import FiltersComp from "./FiltersComp";
import Priority from '../model/Priority';


function MessagesPage(props){
    const {messages} = props;
    let allMsg = messages.map(msg => <MessageComp message={msg}/>)

    function onPriortyChange(priorty) {
      if(priorty == Priority.Important)  {
          console.log('filter Important')
      }else if(priorty == Priority.Info){
        console.log('filter info')
      }else{
        console.log('NO filter')
      }
    } 

    return <div>
        mesages page
       <FiltersComp onFilterPriorty={onPriortyChange}/>
        {allMsg}
    </div>

}

export default MessagesPage