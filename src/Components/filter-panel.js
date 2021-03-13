import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

//___________________________________________________________________________

export default class FilterPanelComponent extends Component {
    filterButtons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render () {
        const { filter, onFilterChange } = this.props;

        const filterStates = this.filterButtons.map(({ name, label }) => {
            const isActive = filter === name;
            const className = isActive ? 'btn-primary' : 'btn-outline-secondary';

            return (
                <Tippy content={ `Show ${ name } items` }>
                    <button 
                        type="button" 
                        className={`btn ${ className }`} 
                        onClick={ () => onFilterChange(name) }
                        key={ name }>
                            { label }
                    </button>
                </Tippy>
            );
        });

        const { toDo, done } = this.props;

        return (
            <div className="filter-panel d-flex justify-content-between my-3">
               <div className="btn-group" role="group" aria-label="Basic outlined example">
                    { filterStates }
                </div>
    
                <div className="ItemStatusFilter">
                    <span className="fs-5 text-secondary">{ toDo } more to do, { done } done</span>
                </div>
            </div>
        );
    };
}