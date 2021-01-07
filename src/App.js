import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./components/ListTask";
import AddTask, {addTask,list} from "./components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import ToDoList from "./components/ToDoList";


function App() {
  
  return (
    <div className='App'>
      <ToDoList/>
      
    </div>
  );
}

export default App;
