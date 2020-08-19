import React from 'react';


function SearchTextComp(props) {
    const { hint } = props



    return <div>
        <input type='text' placeholder={hint}></input>

    </div>

}

export default SearchTextComp