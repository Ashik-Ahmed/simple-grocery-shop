import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/Products';
import Question from './components/Question/Question';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Question></Question>
    </div>
  );
}

export default App;
