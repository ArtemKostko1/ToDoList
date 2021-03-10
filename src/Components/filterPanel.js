import React from 'react';

const FilterPanelComponent = ({ toDo, done }) => {
    return (
        <div className="filterPanel d-flex justify-content-between my-3">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Active</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Done</label>
            </div>

            <div className="ItemStatusFilter">
                <span className="fs-5 text-secondary">{ toDo } more to do, { done } done</span>
            </div>
        </div>
    );
};

export default FilterPanelComponent;