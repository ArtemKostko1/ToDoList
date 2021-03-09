import React from 'react';

const ToDoListItem = ({ label, important = false }) => {
    const importantStyle = {
      color: important ? 'red' : 'black'
    };

    return <span style = { importantStyle }>{ label }</span>
};

export default ToDoListItem;