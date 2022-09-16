import React from 'react';
import './FilterYear.css';

const FilterYear = (props) => {
    return(
        <div className='filter_Bg'>
            <label>Filter By Year</label>
        <select onChange={(e) => props.filterYear(e.target.value)} value = {props.UpdateFilterYear}>
            <option value="All">All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
        </select>
        </div>
    );
}

export default FilterYear;