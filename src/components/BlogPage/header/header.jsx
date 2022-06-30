import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

let Header = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Welcome Lizma</Navbar.Brand>
  <Nav className="mx-100">
        <Nav.Link href="/customer">Customer Table</Nav.Link>
        <Nav.Link href="/blogs">Blogs .</Nav.Link>
    </Nav>
  
  </Container> 
</Navbar>
    )
}

export default Header;