import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import "./header.css";

let Header = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Welcome Lizma</Navbar.Brand>
  <Nav className="mx-100">
        {/* <Nav.Link href="/customer">Customer Table</Nav.Link>
        <Nav.Link href="/blogs">Blogs .</Nav.Link> */}
       <Nav.Link><Link to="/customer" className="Link">Customer Table</Link></Nav.Link>
       <Nav.Link> <Link to="/blogs" className="Link">Blogs .</Link></Nav.Link>
    </Nav>
  
  </Container> 
</Navbar>
    )
}

export default Header;