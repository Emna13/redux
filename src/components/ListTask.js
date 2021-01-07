import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { complete, deelete, edit } from "../js/actionTask/actionTask";
import ModalComponent from "./ModalComponent";
import {Button} from 'react-bootstrap'

const ListTask = ({ list }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };
  const handleClose = () => setShow(false);
  const [id, setId] = useState("");

  return (
    <div className="tab">
      {list.map((el, index) => (
        <div key={index} className="newList">
          <span className={el.isDone ? 'done': 'text'}><li>{el.description}</li></span>
          <Button variant="warning"onClick={() => handleShow(el.id)}>Edit</Button>
          <Button variant="danger" onClick={() => dispatch(deelete(el.id))}>Delete</Button>
          <Button variant="success"onClick={() => dispatch(complete(el.id))}>{!el.isDone ? 'Done' :'Undo'}</Button>
        </div>
      ))}
      <ModalComponent
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        id={id}
      />
    </div>
  );
};

export default ListTask;
