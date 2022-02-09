import React from 'react';
import { TodoProvider } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { AppUI } from './AppUI';

function App() {
  return (
    <React.Fragment>
      <TodoHeader />
      <TodoList />
    </React.Fragment>
  );
}
function TodoHeader() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}
function TodoList() {
  return (    
  <React.Fragment>
    <TodoItem />
  </React.Fragment>);
}
function App() {
  return ();
}



// function App() {

//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;