import './App.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

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
    content: '풋살하기',
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
  const [todos, setTodos] = useState([mockData]);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
};

export default App;
