import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<MainPages/>}/>
         <Route path="/product/list" element={<ProductListPage/>}/>
         <Route path="/bookmark" element={<BookmarkPage/>}/>
       </Routes>
    </Router>

  );
}

export default App;
