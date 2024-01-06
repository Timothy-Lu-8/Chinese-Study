import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import C1L1 from './pages/C1L1'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chin1l1" element={<C1L1/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*TO DO
for quiz, i think select course number -> chapters from that course+select all button
create individual pages -> this is probably where the backend comes into play*/
