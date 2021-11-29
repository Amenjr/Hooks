import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import React from "react";

function CarS({el,Series,setSeries}){
    const delet =(id)=>{
        setSeries(Series.filter(el=> el.id !==id))
 
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>delet(el.id)}>delete</Button>
        <ReactStars count={10} value={el.rate} size={16} activeColor="#ffd700"/>
        </Card.Body>
        </Card>
    );
}
export default CarS;