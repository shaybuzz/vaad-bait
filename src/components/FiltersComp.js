import React from 'react';
import SearchTextComp from './SearchTextComp';
import Priority from '../model/Priority';
import SortComp from './SortComp';



function FiltersComp(props) {
    const { onSearchText, onFilterPriorty, onSortBy } = props

    return <div>
        filter
        <SearchTextComp hint='Filter by title or details' />
        <PriortySelectionComp onPriortySelected={onFilterPriorty} />
        <SortComp />
    </div>

};


function PriortySelectionComp(props) {
    const { onSearchText, onPriortySelected, onSortBy } = props

    return <div>
        <select id="priority" name="priorites" onChange={(evt) => onPriortySelected(evt.target.value)}>
            <option selected disabled>Filter Priority</option>
            <option value={-1}>All</option>
            <option value={Priority.Info}>Info</option>
            <option value={Priority.Important}>Important</option>
        </select>

    </div>
};



export default FiltersComp;

