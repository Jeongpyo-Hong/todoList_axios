import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  console.log("inputs:", inputs);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputs.title.trim() === "" || inputs.content.trim() === "") return;

    dispatch(
      __addTodo({
        id: Date.now(),
        ...inputs,
        isDone: false,
      })
    );
    setInputs({
      title: "",
      content: "",
    });
  };

  return (
    <FormBox onSubmit={onSubmitHandler}>
      <FormContentBox>
        <label>제목: </label>
        <FormInput
          type="text"
          onChange={onChangeHandler}
          name="title"
          value={inputs.title}
          required
        ></FormInput>
        <label>내용: </label>
        <FormInput
          type="text"
          onChange={onChangeHandler}
          name="content"
          value={inputs.content}
          required
        ></FormInput>
      </FormContentBox>
      <Button>작성하기</Button>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;
`;

const FormContentBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin: 20px;
`;

const FormInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 10px;
  border-width: 0px;
  background: white;
`;

const Button = styled.button`
  background: navy;
  color: white;
  width: 150px;
  height: 30px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
