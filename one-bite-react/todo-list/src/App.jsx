import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
};

export default App;
