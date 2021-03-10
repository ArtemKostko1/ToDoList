import React from 'react';

const FilterPanelComponent = ({ toDo, done }) => {
    return (
        <div className="filterPanel d-flex justify-content-between my-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio1">All</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio2">Active</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btnradio3">Done</label>
            </div>

            <div className="ItemStatusFilter">
                <span className="fs-5 text-secondary">{ toDo } more to do, { done } done</span>
            </div>
        </div>
    );
};

export default FilterPanelComponent;