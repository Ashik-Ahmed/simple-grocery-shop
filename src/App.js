import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/Products';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Products></Products>
      <Question></Question>
    </div>
  );
}

export default App;
