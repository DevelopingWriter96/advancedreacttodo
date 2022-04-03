// import Add from './Add';
// import Delete from './Delete';
// import List from './List';
// import data from './data.json';
// import { useReducer, useContext } from 'react';

function App() {

  return (
    <div className="wrapper">
        <header>Todo List</header>
        <div className="inputField">
          <input className="newTodo" type="text" placeholder="Enter new task" />
          <button> <i className="fas fa-plus"></i> </button>
        </div>
        <ul className="todoList">
          <li className='done'>Todo Item 1 (Done example)<span> <i className="fa fa-trash"></i></span></li>
          <li className=''>Todo Item 2<span> <i className="fa fa-trash"></i></span></li>
        </ul>
      <div className="footer">
        <span>You have 1 pending tasks.</span>
        <button>Clear Done</button>
      </div>
    </div>
  );
}

export default App;
