import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
