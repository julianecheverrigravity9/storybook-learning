import React from "react";

import "../css/selectedFilter.css";

const SelectedFilter = ({ text }) => {

    return (
        <div className='selectedFilter'>
            <label className="filterText">{text}</label>
            <i className="fa fa-times removeFilterIcon" aria-hidden="true"></i>
        </div>
    );
};

export default SelectedFilter;