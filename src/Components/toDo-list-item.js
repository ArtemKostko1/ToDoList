import React from 'react';
import '../Styles/CSS/mainStyles.css';

const ToDoListItem = ({ label, important = false }) => {
    const importantStyle = {
      color: important ? 'steelBlue' : 'black',
      fontWeight: important ? '700' : 'normal'
    };

    return (
      <div className = "toDo-list-item">
        <span className="d-flex justify-content-between align-items-center" style = { importantStyle }> 
          { label } 
        
          <div className="interaction-buttons">
            <button className="btn btn-outline-danger btn-sm mx-1" type="button">
              <i className="fa fa-trash-o"/>
            </button>

            <button className="btn btn-outline-success btn-sm mx-1" type="button">
              <i className="fa fa-exclamation"/>
            </button>
          </div>
        </span>
      </div>
    );
};

export default ToDoListItem;