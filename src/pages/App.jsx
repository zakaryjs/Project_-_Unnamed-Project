import '../styles/App.css';
import header from '../components/header';
import SearchForm from '../components/searchBar';


function App() {
  return (
    <div className="App">
      {header}
      <SearchForm />
    </div>
  );
}

export default App;
