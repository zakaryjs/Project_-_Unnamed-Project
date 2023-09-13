import '../styles/App.css';
import header from '../components/header';
import searchBar from '../components/searchBar';


function App() {
  return (
    <div className="App">
      {header}
      {searchBar}
    </div>
  );
}

export default App;
