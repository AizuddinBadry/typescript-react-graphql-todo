import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { TodoListData } from '../utils/constants';

function useGlobalState() {
  const [todoList, setTodoList] = useState([]);

  const saveNewTodo = ({ title, complete }: TodoListData) => {
    setTodoList((todo) => [...todo, { title, complete }]);
    console.log(todoList);
  };

  return {
    todoList,
    setTodoList,
    saveNewTodo,
  };
}

export const GlobalStateContainer = createContainer(useGlobalState);
