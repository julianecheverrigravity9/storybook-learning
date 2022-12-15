import React from "react";
import SelectedFilter from './selectedFilter';


const SelectedFilterList = ({ data }) => {

    return (
        data?.map(obj => {
            return <SelectedFilter text={obj.label} key={obj.value} />
        })
    );
};

export default SelectedFilterList;