import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

//important to note that javascript code is typed in curly brackets
function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

//We always export out component function so that we can use it in our other files (notice in the index.js file, we import this App function
export default App;
