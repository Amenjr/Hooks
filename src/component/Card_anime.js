import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import React from "react";

function CarA({anime,Animes,setAnimes}){
    const dell =(id)=>{
        setAnimes(Animes.filter(anime => anime.id !==id));
 
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={anime.image} />
        <Card.Body>
        <Card.Title>{anime.name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>dell(anime.id)}>delete</Button>
        <ReactStars count={10} value={anime.rate} size={16} activeColor="#ffd700"/>
        </Card.Body>
        </Card>
    );
}
export default CarA;