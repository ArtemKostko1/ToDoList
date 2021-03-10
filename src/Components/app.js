import HeaderComponent from './header';
import FilterPanelComponent from './filterPanel';
import InputFormComponent from './input-form';
import ToDoListComponent from './toDo-list';
import '../Styles/CSS/mainStyles.css';

const AppComponent = () => {
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
        <InputFormComponent />
        <ToDoListComponent listItems = { toDoListItemData }/>
      </div>
    </div>
  );
}

export default AppComponent;