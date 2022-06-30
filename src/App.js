// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from "./components/BlogPage/BlogPage"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CustomerTable from "./components/BlogPage/View-Customers/customerTable";

let Blogs =()=>{
  return(
    <>
      <h1>This is Blogs page</h1>
    </>
  )
}




function App() {
  return (
  <BrowserRouter>
    <div className="App">
    
    <Routes>
      <Route path="/" element={<BlogPage />}/>
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/customer" element={<CustomerTable/>} /> 
    </Routes>
    
    
    </div>
    </BrowserRouter> 
  );
}

export default App;
