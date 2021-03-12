import React, {Component} from 'react';
import '../Styles/CSS/mainStyles.css';

export default class ToDoListItem extends Component {
  render() {
    const { label, onDeletedToDoListItem, onToggleDone, onToggleImportant, done, important } = this.props;

    let className = 'toDo-list-item';

    if(done) {
      className += ' done';
    }
    
    if(important) {
      className += ' important';
    }

    return (
      <div className = { className }>
        <span className="toDo-list-item-label d-flex justify-content-between align-items-center"> 
          { label } 
        
          <div className="interaction-buttons">
            <button className="btn btn-outline-success btn-sm mx-1 p-1" type="button" onClick={ onToggleDone }>
              <i className="fa fa-check"/>
            </button>

            <button className="btn btn-outline-warning btn-sm mx-1 p-1" type="button" onClick={ onToggleImportant }>
              <i className="fa fa-exclamation"/>
            </button>

            <button className="btn btn-outline-danger btn-sm mx-1 p-1" type="button" onClick={ onDeletedToDoListItem }>
              <i className="fa fa-trash-o"/>
            </button>
          </div>
        </span>
      </div>
    );
  };
}