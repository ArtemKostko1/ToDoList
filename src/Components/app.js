import React, { Component } from 'react';
import HeaderComponent from './header';
import FilterPanelComponent from './filter-panel';
import ItemAddFormComponent from './item-add-form';
import ToDoListComponent from './toDo-list';
import '../Styles/CSS/mainStyles.css';

const { v4: uuid } = require('uuid');

//___________________________________________________________________________

export default class AppComponent extends Component {
  state = {
    toDoListItemData: [
      this.CreateToDoItem('To meet friends'),
      this.CreateToDoItem('Learn React'),
      this.CreateToDoItem('Have a lunch')
    ]
  };

  //------------------------------------------------------------------------

  CreateToDoItem(text) {
    return {
      label: text,
      done: false,
      important: false,
      id: uuid()
    };
  };

  //------------------------------------------------------------------------

  AddToDoListItem = (text) => {
    const newItem = this.CreateToDoItem(text);

    this.setState(({ toDoListItemData }) => {
      const newArray = [
        ...toDoListItemData,
        newItem
      ];

      return{
        toDoListItemData: newArray
      };
    });
  };

  //------------------------------------------------------------------------

  DeleteToDoListItem = (id) => {
    this.setState(({ toDoListItemData }) => {
      const index = toDoListItemData.findIndex((el) => el.id === id);

      const newArray = [ 
        ...toDoListItemData.slice(0, index),
        ...toDoListItemData.slice(index + 1)
      ];

      return{
        toDoListItemData: newArray
      };
    });
  };

  //------------------------------------------------------------------------

  ToggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName]};

    return[
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  //------------------------------------------------------------------------

  onToggleImportant = (id) => {
    this.setState(({ toDoListItemData }) => {
      return{
        toDoListItemData: this.ToggleProperty(toDoListItemData, id, 'important')
      };
    });
  };

  //------------------------------------------------------------------------

  onToggleDone = (id) => {
    this.setState(({ toDoListItemData }) => {
      return{
        toDoListItemData: this.ToggleProperty(toDoListItemData, id, 'done')
      };
    });
  };

  //------------------------------------------------------------------------

  render() {
    const { toDoListItemData } = this.state;
    const doneItemsCount = toDoListItemData.filter((el) => el.done).length;
    const unDoneItemsCount = toDoListItemData.length - doneItemsCount;

    return (
      <div className="app_wrapper p-4">
        <HeaderComponent />
  
        <div className="main">
          <FilterPanelComponent toDo={ unDoneItemsCount } done={ doneItemsCount } />
          <ItemAddFormComponent onAddedToDoListItem = { this.AddToDoListItem }/>
          <ToDoListComponent 
            listItems = { toDoListItemData } 
            onDeletedToDoListItem = { this.DeleteToDoListItem }
            onToggleImportant = { this.onToggleImportant }
            onToggleDone = { this.onToggleDone }
          />
        </div>
      </div>
    );
  };
}