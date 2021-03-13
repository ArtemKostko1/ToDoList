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
    ],
    searchItem: '',
    filter: 'all' // all, active, done
  };

  //------------------------------------------------------------------------

  render() {
    const { toDoListItemData, searchItem, filter } = this.state;
    const doneItemsCount = toDoListItemData.filter((el) => el.done).length;
    const unDoneItemsCount = toDoListItemData.length - doneItemsCount;
    const visibleItems = this.ItemsFilter(this.SearchFilter(toDoListItemData, searchItem), filter);

    return (
      <div className="app_wrapper p-4">
        <HeaderComponent onSearchChange={ this.onSearchChange }/>
  
        <div className="main">
          <FilterPanelComponent 
            toDo={ unDoneItemsCount } 
            done={ doneItemsCount } 
            filter={ filter }
            onFilterChange={ this.onFilterChange }/>

          <ItemAddFormComponent onAddedToDoListItem = { this.AddToDoListItem }/>

          <ToDoListComponent 
            listItems = { visibleItems } 
            onDeletedToDoListItem = { this.DeleteToDoListItem }
            onToggleImportant = { this.onToggleImportant }
            onToggleDone = { this.onToggleDone }
          />
        </div>
      </div>
    );
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
  };

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

  SearchFilter(items, searchItem) {
    if(searchItem.label === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchItem.toLowerCase()) > -1;
    });
  };

  //------------------------------------------------------------------------

  onSearchChange = (searchItem) => this.setState({ searchItem });

  //------------------------------------------------------------------------
  
  onFilterChange = (filter) => this.setState({ filter });

  //------------------------------------------------------------------------

  ItemsFilter (items, filter) {
    switch(filter) {
      case 'all':
        return items;

      case 'active':
        return items.filter((item) => !item.done);

      case 'done':
        return items.filter((item) => item.done);

      default:
        return items;
    }
  };
}