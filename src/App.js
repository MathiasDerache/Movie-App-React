import './App.css';
import { Router } from './components/Router';

if(localStorage.getItem('movies') == null ){
  localStorage.setItem('movies', '[]')
}
function App() {
  return (
    <div className="App">
        <Router/>
    </div>
  );
}

export default App;
