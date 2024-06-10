import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import Flashcards from './pages/Flashcards';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards/>} />
            <Route path='/quiz' element={<Quiz/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*TO DO
update the database
possibly add supplementary
add important sentence structures*/
