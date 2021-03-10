import React from 'react';
import ToDoListItem from './toDo-list-item';

const ToDoListComponent = ({ listItems }) => {
    const items = listItems.map((item) => {
        const { id, ...itemProps } = item;

        return (
           <li key={id} className="list-group-item">
               <ToDoListItem { ...itemProps }/>
           </li>
        );
    });

    return (
        <div className = "toDo-list my-3">
            <ul className="list-group">
                { items }
            </ul>
        </div>
    );
};

export default ToDoListComponent;