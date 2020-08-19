import React from 'react';
import MessageComp from './MessageComp';
import FiltersComp from "./FiltersComp";
import Priority from '../model/Priority';
import Message from '../model/Message';


function MessagesPage(props) {
    const { messages } = props;
    const [theMessages, updateMessages] = React.useState(messages)
    let messagesElements = theMessages.map(msg => <MessageComp message={msg} />)


    function onPriortyChange(priorty) {
        if (priorty == Priority.Important) {
            console.log('filter Important')
            //TODO not working???
            // updateMessages(messages.filter((msg) =>
            //     msg.priorty === Priority.Important
            // ))
        } else if (priorty == Priority.Info) {
            console.log('filter info')
            // updateMessages(messages.filter((msg) =>
            //     msg.priorty === Priority.Info
            // ))
        } else {
            updateMessages(messages)
        }
    }

    function onSearchMsg(msgTxt) {
        console.log(`search the msg ${msgTxt}`)
        if (msgTxt === undefined || msgTxt === '') {
            updateMessages(messages)
        } else {
            updateMessages(messages.filter((msg) =>
                msg.title.includes(msgTxt) || msg.details.includes(msgTxt)
            ))
        }


    }

    return <div>
        mesages page
       <FiltersComp onFilterPriorty={onPriortyChange} onSearchText={onSearchMsg} />
        {messagesElements}
    </div>

}

export default MessagesPage