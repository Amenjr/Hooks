import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function ModA({Animes,setAnimes}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newAnimeTitre,setnewAnimeTitre]=useState("");
    const [newAnimeImage,setnewAnimeImage]=useState("");
    const [newRate,setnewRate]=useState("");
  
    const handleAdd=()=>{
      setAnimes([...Animes,{id:Math.random(),name:newAnimeTitre,image:newAnimeImage,rate:newRate} ]);
      
  }

    return (
      <>
        <Button variant="outline-secondary" className="btn1" onClick={handleShow}>
           Add Animes
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>image</Modal.Body>
          <input type="text" value={newAnimeImage} onChange={(e)=>setnewAnimeImage(e.target.value)} />
          <Modal.Body>Name</Modal.Body>
          <input type="text" value={newAnimeTitre} onChange={(e)=>setnewAnimeTitre(e.target.value)}  />
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
  export default ModA;