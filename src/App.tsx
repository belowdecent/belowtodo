import './App.scss';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  return (
    <div class="app">
      <Header />
      <div class="container">
        <Todo />
      </div>
      <div class="container-2">
        <Todo />
        <Todo />
      </div>
      <div class="container-3">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
