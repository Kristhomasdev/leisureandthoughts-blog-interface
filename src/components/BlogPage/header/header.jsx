import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

let Header = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Welcome Lizma</Navbar.Brand>
  
  </Container>
</Navbar>
    )
}

export default Header;