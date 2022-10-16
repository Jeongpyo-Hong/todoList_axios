import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todos";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  if (error) {
    return console.log(error);
  }

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
