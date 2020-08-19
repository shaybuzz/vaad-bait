import React from 'react';
import MenuComp from './MenuComp';
import Message from '../model/Message';
import Priority from '../model/Priority';
import MessageComp from './MessageComp';


function MainPage(){

    let msg1 = new Message("some title", "some detaila long", Priority.Info);
    let msg2 = new Message("some other title", "some detaila  long long long", Priority.Important);


    return <div>
        <MenuComp/>
        <h4>main page</h4>
        <MessageComp message={msg1}/>
        <MessageComp message={msg2}/>


    </div>

}

export default MainPage