import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function ModF({movies,setMovies}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newFilmTitre,setnewFilmTitre]=useState("");
    const [newFilmImage,setnewFilmImage]=useState("");
    const [newRate,setnewRate]=useState("");
  
    const handleAdd=()=>{
      setMovies([...movies,{id:Math.random(),name:newFilmTitre,image:newFilmImage,rate:newRate} ]);  
  }

    return (
      <>
        <Button variant="outline-secondary" className="btn1" onClick={handleShow}>
           Add Movies
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>image</Modal.Body>
          <input type="text" value={newFilmImage} onChange={(e)=>setnewFilmImage(e.target.value)} />
          <Modal.Body>Name</Modal.Body>
          <input type="text" value={newFilmTitre} onChange={(e)=>setnewFilmTitre(e.target.value)}  />
          <Modal.Body>Rate</Modal.Body>
          <input type="text" value={newRate} onChange={(e)=>setnewRate(e.target.value)}  />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ModF;