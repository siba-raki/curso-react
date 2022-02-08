import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(){
    return(
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
            {({error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo}) =>(
                <TodoList>
                {error && <p>PANICO!!</p>}
                {loading && <p>Cargando, espere...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!</p>}
      
                {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
                ))}
              </TodoList>
            )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </React.Fragment>
    )
}

export { AppUI }

