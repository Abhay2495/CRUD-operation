import './App.css';
import Home from './components/home';
import AddUser from './components/addUser';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Edit from './components/Edit.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element ={<Home/>} />
          <Route path ='/create' element ={<AddUser/>} />
          <Route path = '/edit' element = {<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
