import React from "react";
import "../css/selectedFilter.css";

const SelectedFilterList = ({ data, setData }) => {

    const removeFilter = (option, e) => {
        e.stopPropagation();
        var newState = data?.map((obj) => {
            if (obj.value === option.value) {
                obj.selected = false;
                return obj;
            }
            return obj;
        });

        setData(newState);
    };

    return (
        data.map(obj => (
            <div className='selectedFilter' key={obj?.value} onClick={(e) => removeFilter(obj, e)}>
                <label className="filterText">{obj?.label}</label>
                <i className="fa fa-times removeFilterIcon" aria-hidden="true"></i>
            </div>
        ))
    );
};

export default SelectedFilterList;