import HeaderComponent from './Components/header';
import ToDoListComponent from './Components/toDo-list';

const App = () => {
    const toDoListItemData = [
        {label: 'To meet friends', important: true, id: 1},
        {label: 'Learn React', important: false, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

  return (
      <div className="app_wrapper container">
        <HeaderComponent/>
        <ToDoListComponent listItems = { toDoListItemData }/>
      </div>
  );
}

export default App;
