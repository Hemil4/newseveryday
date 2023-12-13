import "./App.css";
import Navbar from "./components/Navbar";
import NewsArea from "./components/NewsArea";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<NewsArea key="g" catagory="general" />} />
          <Route exact   path="general" element={<NewsArea key="ge" catagory="general" />} />
          <Route exact   path="business" element={<NewsArea key="b" catagory="business" />} />
          <Route exact  
            path="entertainment"
            element={<NewsArea key="e" catagory="entertainment" />}
          />
          <Route exact   path="health" element={<NewsArea key="h" catagory="health" />} />
          <Route exact   path="science" element={<NewsArea key="sc" catagory="science" />} />
          <Route exact   path="sports" element={<NewsArea key="sp" catagory="sports" />} />
          <Route exact  
            path="technology"
            element={<NewsArea key="t" catagory="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
