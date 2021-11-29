import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function ModS({Series,setSeries}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newSerieTitre,setnewSerieTitre]=useState("");
    const [newSerieImage,setnewSerieImage]=useState("");
    const [newRate,setnewRate]=useState("");
  
    const handleAdd=()=>{
      setSeries([...Series,{id:Math.random(),name:newSerieTitre,image:newSerieImage,rate:newRate} ]);  
  }

    return (
      <>
        <Button variant="outline-secondary" className="btn1" onClick={handleShow}>
           Add Series 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>image</Modal.Body>
          <input type="text" value={newSerieImage} onChange={(e)=>setnewSerieImage(e.target.value)} />
          <Modal.Body>Name</Modal.Body>
          <input type="text" value={newSerieTitre} onChange={(e)=>setnewSerieTitre(e.target.value)}  />
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
  export default ModS;