import React, { useState } from "react";

import "../css/dropdown.css";

const Dropdown = ({ placeHolder, options, setData }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleInputClick = e => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }

    const handleSelectedItem = (option, e) => {
        option.selected = e.target.checked === undefined ? false : e.target.checked;

        const newState = options?.map(obj => {
            if (obj.value === option.value) {
                return option;
            }

            return obj;
        });

        setData(newState);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-placeHolder" onClick={handleInputClick}>
                <label>
                    {placeHolder}
                </label>
                <i className={(showMenu ? "dropdown-icon fas fa-angle-up" : "dropdown-icon fas fa-angle-down")}></i>
            </div>
            <div className="dropdown-menu">
                {showMenu && (
                    options?.map(option => (
                        <div key={option.value} className="dropdown-item">
                            <input type="checkbox"
                                name={option.label}
                                value={option.value}
                                id={option.value}
                                checked={option.selected}
                                readOnly
                                onClick={(e) => handleSelectedItem(option, e)}
                            />
                            <label htmlFor={option.value}>
                                {option.label}
                            </label>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dropdown;