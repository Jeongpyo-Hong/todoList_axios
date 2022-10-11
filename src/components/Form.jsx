import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputs.title.trim() === "" || inputs.content.trim() === "") return;

    dispatch(
      addTodo({
        id: Date.now(),
        ...inputs, // 아래가 풀어놓은 모습
        // title: inputs.title,
        // content: inputs.content,
        isDone: false,
      })
    );
    setInputs({
      title: "",
      content: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>제목: </label>
      <input
        type="text"
        onChange={onChangeHandler}
        name="title"
        value={inputs.title}
      ></input>
      <label>내용: </label>
      <input
        type="text"
        onChange={onChangeHandler}
        name="content"
        value={inputs.content}
      ></input>
      <button>작성하기</button>
    </form>
  );
};

export default Form;
