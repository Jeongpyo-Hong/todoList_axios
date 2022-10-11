import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const List = () => {
  const todos = useSelector((state) => state.todos);
  console.log("aa", todos);

  return (
    <div>
      <div>
        <h2># WORKING #</h2>
        {todos &&
          todos.map((todo) =>
            !todo.isDone ? <Todo key={todo.id} todo={todo} /> : null
          )}
      </div>
      <div>
        <h2># DONE #</h2>
        {todos &&
          todos.map((todo) =>
            todo.isDone ? <Todo key={todo.id} todo={todo} /> : null
          )}
      </div>
    </div>
  );
};

export default List;

{
  /* // todos.filter(todo => !todo.isDone).map */
}
{
  /* //   (todo => <Todo key={todo.id} todo={todo} />) */
}

{
  /* {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))} */
}
