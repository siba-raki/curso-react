import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
      addTodo,
  } = React.useContext(TodoContext)

  const onCancel = () => {

  };  
  const onSubmit = () => {
    addTodo
  };  
  return (
    <form onSubmit={}>
      <laber>...</laber>
        <textarea 
          placeholder='Cortara a '
        />
          <div>
            <button
              type="button"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
            >
              Crear
            </button>
          </div>  
    </form>
  );
}

export { TodoForm };