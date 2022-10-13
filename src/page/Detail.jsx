import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  console.log("todos:", todos);

  const { id } = useParams();
  console.log("id:", id); // 콘솔 창에서 문자열은 흰색, 숫자는 보라색

  const todo = todos.find((todo) => {
    return todo.id === +id; // 문자열이므로 숫자로 변환
  });
  console.log("todo:", todo);

  return (
    <DetailWrap>
      <DetailBox>
        <DetailHeader>
          <p>{todo.id}</p>
          <Link to={"/"}>이전으로</Link>
        </DetailHeader>
        <DetailBody>
          <DetailTitle>{todo.title}</DetailTitle>
          <DetailContent>{todo.content}</DetailContent>
        </DetailBody>
      </DetailBox>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DetailBox = styled.div`
  width: 400px;
  height: 400px;
  padding: 50px;
  border: 3px solid lightgray;
  box-shadow: 0px 0px 5px lightgray;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailBody = styled.div`
  margin-top: 80px;
`;

const DetailTitle = styled.p`
  font-size: 40px;
  margin-bottom: 40px;
`;

const DetailContent = styled.p`
  font-size: 16px;
`;
