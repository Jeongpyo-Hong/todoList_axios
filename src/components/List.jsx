import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

const List = () => {
  const todos = useSelector((state) => state.todos);
  console.log("List_todos", todos);

  return (
    <ListContainer>
      <div>
        <ListName>✍️ WORKING</ListName>
        <ListBox>
          {todos &&
            todos.map((todo) =>
              !todo.isDone ? <Todo key={todo.id} todo={todo} /> : null
            )}
        </ListBox>
      </div>
      <div>
        <ListName>👏 DONE</ListName>
        <ListBox>
          {todos &&
            todos.map((todo) =>
              todo.isDone ? <Todo key={todo.id} todo={todo} /> : null
            )}
        </ListBox>
      </div>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  padding: 0px 20px;
`;

const ListBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 40px 60px;
`;

const ListName = styled.div`
  font-size: 26px;
  text-decoration: double wavy black;
  margin: 30px 0px;
`;
