import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Layout from "../components/Layout";
import List from "../components/List";

const TodoList = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </div>
  );
};

export default TodoList;
