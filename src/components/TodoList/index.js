import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render
  console.log("hola)
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}



      {(!props.loading && !props.totalTodos) && "!crea un todo"}

      {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}
      
      
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
