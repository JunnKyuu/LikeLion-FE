import './App.css';
import { useState, useRef } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '넷플릭스 보기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '멋사 활동',
    date: new Date().getTime(),
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
      <Exam />
    </div>
  );
};

export default App;
