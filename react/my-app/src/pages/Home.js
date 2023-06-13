import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import plex from "../App.css";
import movies from "./Data";
import { useState } from "react";
import { Card } from "react-bootstrap";

function Home() {

    const [moviesList , setMovieList] = useState(movies)

    const onInputItem = (event)=>{
        let query = event.target.value;
        let updatedList = movies.filter((movie)=>{
            return movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        })
        setMovieList(updatedList);
        console.log(updatedList);
    }
  return (
  
    <div className="main-page">
      <header>
        <Navbar bg="light" expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" className="list">
                  Link
                </Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main
        className="main-img"
        style={{
          backgroundImage: `url(${plex})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="h">Where Cinema Comes Alive!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <input
        type="text"
        id="search-second"
        onChange={onInputItem}
        placeholder=""
      />
        <button>Start watching</button>
      </main>
      function
      <div className="cards">
      {moviesList.map((movie, index) => (
        <div className="cardContainer" key={index}>
          <Card style={{ width: "18rem" }} className="Crads">
            <Card.Img
              variant="top"
              src={movie.img}
              className="card-img"
            ></Card.Img>
            <Card.Body>
              <Card.Title className="title">{movie.title}</Card.Title>
              <div className="info">
                <div>
                  <Card.Text> Year : {movie.year}</Card.Text>
                  <Card.Text className="rate">Rate : {movie.rating}</Card.Text>
                </div>
                <Link
                to= {`/details/${index}`} className="">Details</Link>
              </div>
            </Card.Body>
          </Card>
          
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default Home;

        // <div>
        //   <Link to={"/details/5"}>aa</Link>
        // </div>