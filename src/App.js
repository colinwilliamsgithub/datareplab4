import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './mycomponents/header';
import Footer from './mycomponents/footer';
import Content from './mycomponents/content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* Creates navbar with links to other pages */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Creates links that allows user to access different pages */}
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='create' element={<Header></Header>}></Route>
        <Route path='read' element={<Footer></Footer>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
