import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onToggleHandler = () => {
    dispatch(toggleStatusTodo(todo.id));
  };

  return (
    <div>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.content}</p>
      </div>
      <button onClick={onDeleteHandler}>삭제</button>
      <button onClick={onToggleHandler}>
        {todo.isDone === false ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default Todo;
