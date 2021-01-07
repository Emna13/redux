import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../js/actionTask/actionTask";

const ModalComponent = ({ handleClose, show, id }) => {
    const [taskModified, setTaskModified] = useState('')
    const handelChange=(e)=>{
        setTaskModified(e.target.value)
    }
    const dispatch = useDispatch()
    const editTask=(id)=>{
        dispatch(edit({id:id,taskModified:taskModified}))
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Edit task" onChange={handelChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();editTask(id)}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
