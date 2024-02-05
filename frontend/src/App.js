import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import Flashcards from './pages/Flashcards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*TO DO
for quiz, i think select course number -> chapters from that course+select all button*/
