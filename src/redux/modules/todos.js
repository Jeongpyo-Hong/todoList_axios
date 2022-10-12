// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// export const getTodoById = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };

// initialState
const initialState = [
  {
    id: 0,
    title: "리덕스",
    content: "리덕스 배우기",
    isDone: false,
  },
];

// Reducer
const todos = (state = initialState, action) => {
  console.log("action:", action);
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_STATUS_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    // case GET_TODO_BY_ID:
    //   return state.filter((todo) => todo.id === action.payload);
    default:
      return state;
  }
};

//export
export default todos;

// if (todo.id === action.payload) {
//   return { ...todo, isDone: !todo.isDone };
// } else {
//   return todo;
// }
