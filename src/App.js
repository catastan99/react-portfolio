import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import './utility/utility.css'


function App() {
  const scroll = () =>{
    console.log('merge')
  }
  return (
    <div className="App" onScroll={scroll}>
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
