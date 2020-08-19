import React from 'react';

function SortComp(props) {

    return <div>sort
        <fieldset id="sort">
            <input type="radio" id='sorDate' value="date" name='sort' />
            <label for='sorDate'>Date</label>
            <input type="radio" id='sortPriority' value='priority' name='sort' />
            <label for='sortPriority'>Priority</label>
        </fieldset>

    </div>

};


export default SortComp;

