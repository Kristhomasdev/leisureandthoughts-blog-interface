// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from "./components/BlogPage/BlogPage"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CustomerTable from "./components/BlogPage/View-Customers/customerTable";
import BLOGS from "./components/BlogPage/View-Blogs/BLOGS";
import EditBody from "./components/BlogPage/Edit-BLOGS/edit-Blogs";






function App() {
  return (
  <BrowserRouter>
    <div className="App">
    
    <Routes>
      <Route path="/" element={<BlogPage />}/>
      <Route path="/blogs" element={<BLOGS />} />
      <Route path="/blogs/update/:id" element={<EditBody/>}/>
      
      <Route path="/customer" element={<CustomerTable/>} /> 
    </Routes>
    
    
    </div>
    </BrowserRouter> 
  );
}

export default App;
