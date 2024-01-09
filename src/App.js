import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';
import {filterData,apiUrl} from './data';

function App() {
  return (
    <div className="wrapper">
        <div>
          <Navbar/>
        </div>
        <div>
          <Filter filterData={filterData}/>
        </div>
        <div>
          <Card/>
        </div>
    </div>
  );
}

export default App;
