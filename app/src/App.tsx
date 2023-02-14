import React from 'react';
import Characters from './pages/Characters/Characters';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/characters' element={<Characters/>}></Route>
          <Route path='/error' element={<Error/>}></Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
