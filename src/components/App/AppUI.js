import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI(){
    const {error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        openModal,
        setOpenModal,
        deleteTodo} = React.useContext(TodoContext)

    return(
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
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
        {openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      </React.Fragment>
    )
}

export { AppUI }

