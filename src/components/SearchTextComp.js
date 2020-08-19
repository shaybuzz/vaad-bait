import React from 'react';


function SearchTextComp(props) {
    const { hint, onTextChange } = props



    return <div>
        <input type='text' placeholder={hint} onChange={(evt)=>onTextChange(evt.target.value)}></input>

    </div>

}

export default SearchTextComp