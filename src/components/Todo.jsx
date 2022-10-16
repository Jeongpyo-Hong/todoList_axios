import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { __deleteTodo, __toggleStatusTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(__deleteTodo(todo.id));
  };

  const onToggleHandler = () => {
    dispatch(__toggleStatusTodo(todo.id));
  };

  return (
    <TodoBox>
      {/* 
      Link는 약간 외부 느낌?,, navigate가 기능을 더 추가할 수 있음(자체기능들,,) 
      navigate는 함수 안에서 사용할 수 있음(ex. 로그인 기능과 연결,,)
      */}
      <LinkTitle to={`/${todo.id}`}>상세보기</LinkTitle>
      <TodoAuthor>이름: {todo.author}</TodoAuthor>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoContent>{todo.content}</TodoContent>
      <TodoBtnBox>
        <TodoDeleteBtn onClick={onDeleteHandler}>삭제</TodoDeleteBtn>
        <TodoEditBtn onClick={onToggleHandler}>
          {todo.isDone === false ? "완료" : "취소"}
        </TodoEditBtn>
      </TodoBtnBox>
    </TodoBox>
  );
};

export default Todo;

const LinkTitle = styled(Link)`
  font-size: 12px;
  font-weight: 600;
`;

const TodoBox = styled.div`
  width: 180px;
  height: 150px;
  border: 5px dotted #eeeeee;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px 0px;
`;

const TodoAuthor = styled.p`
  font-size: 20px;
  margin: 10px 0px;
`;

const TodoTitle = styled.p`
  font-size: 20px;
  margin: 20px 0px;
`;

const TodoContent = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TodoBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

const TodoDeleteBtn = styled.button`
  width: 100px;
  height: 25px;
  background: #aee1ff;
  color: black;
  border-radius: 5px;
  cursor: pointer;
`;

const TodoEditBtn = styled.button`
  width: 100px;
  height: 25px;
  background: navy;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
