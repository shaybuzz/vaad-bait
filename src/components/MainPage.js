import React from 'react';
import MenuComp from './MenuComp';
import Message from '../model/Message';
import Priority from '../model/Priority';
import MessagesPage from './MessagesPage';


function MainPage(){

    let msg1 = new Message("some title", "some detaila long", Priority.Info);
    let msg2 = new Message("some other title", "some detaila  long long long", Priority.Important);
    let msg3 = new Message("title", " detaila");
    let msgs = [msg1,msg2, msg3]

    return <div>
        <MenuComp/>
        <h4>main page</h4>
        <MessagesPage messages={msgs}/>
    </div>

}

export default MainPage