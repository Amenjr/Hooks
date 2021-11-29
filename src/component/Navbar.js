import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import React from "react";
import ModF from './Modal_film';
import ModA from './Modal_anime';
import ModS from './Modal_serie';
function Navv({ShowFilms,ShowSeries,ShowAnimes,ShowHomes,search,setSearch,setSearchrate,movies,setMovies,Animes,setAnimes,Series,setSeries}){
  const ratingChanged = (newRating) => {
    setSearchrate(newRating);
  }
  


    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">Collection</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link onClick={()=>ShowHomes()} >Home</Nav.Link>
                  <ModF  movies={movies}  setMovies={setMovies}  />
                  <ModA  Animes={Animes}  setAnimes={setAnimes} />
                  <ModS  Series={Series}  setSeries={setSeries} />
                  
                  <NavDropdown title="Watching" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={()=>ShowFilms()} >Film</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>ShowSeries()}>Serie</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>ShowAnimes()}>Anime</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    
                  />
                  
                </Form>
                <ReactStars count={10} onChange={ratingChanged} size={16} activeColor="#ffd700"/>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    );

}
export default Navv;