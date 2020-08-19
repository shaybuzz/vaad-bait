import React from 'react';
import SearchTextComp from './SearchTextComp';
import Priority from '../model/Priority';


function FiltersComp() {



    return <div>
        filter
        <SearchTextComp hint='Filter by title or details' />
        <PriortySelectionComp />
        <SortComp />
    </div>

};

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


function PriortySelectionComp() {
    return <div>
        <select id="priority" name="cars">
            <option selected disabled>Filter Priority</option>
            <option value={-1}>All</option>
            <option value={Priority.Info}>Info</option>
            <option value={Priority.Important}>Important</option>
        </select>

    </div>
};



export default FiltersComp;
