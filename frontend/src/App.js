import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import Chin1 from './components/Chin1'
import Chin2 from './components/Chin2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
            path="/"
            element={<Home/>} 
            />
          </Routes>
        </div>
        <Chin1 />
        <Chin2 />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*TO DO
for quiz, i think select course number -> chapters from that course+select all button
create individual pages -> this is probably where the backend comes into play*/
