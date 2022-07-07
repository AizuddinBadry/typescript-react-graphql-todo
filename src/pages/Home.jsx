import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

import { GlobalStateContainer } from '../provider/GlobalStateContainer';

export default function Home() {
  const { todoList, saveNewTodo } = GlobalStateContainer.useContainer();

  const [title, setTitle] = useState('');

  return (
    <>
      <Navbar />
      <Card>
        <p>
          This is my todo list
        </p>
        <ul>
          {todoList.map((todo, idx) => (
            <li key={idx}>{todo.title}</li>
          ))}
          {todoList.length === 0 && 'No new todo today :('}
        </ul>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Button
          buttonType="primary"
          className="w-full block h-12"
          size="xs"
          type="button"
          onClick={() => { saveNewTodo({ title, complete: false }); setTitle(() => ''); }}
        >
          Add new
        </Button>
      </Card>
    </>
  );
}
