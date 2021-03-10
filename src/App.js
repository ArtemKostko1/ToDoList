import HeaderComponent from './Components/header';
import ToDoListComponent from './Components/toDo-list';
import FilterPanelComponent from './Components/filterPanel';
import './Styles/CSS/mainStyles.css';

const App = () => {
    const toDoListItemData = [
        {label: 'To meet friends', important: true, id: 1},
        {label: 'Learn React', important: false, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

  return (
      <div className="app_wrapper p-4">
        <HeaderComponent />
        <div className="main">
          <FilterPanelComponent toDo={2} done={1} />
          <ToDoListComponent listItems = { toDoListItemData }/>
        </div>
      </div>
  );
}

export default App;
