import { add, complete, edit, deelete } from "../actionTask/actionTask";
import { COMPLETE, DELETE, EDIT, ADD } from "../actionTypes/actionTypes";

const list = [
  {
    id:Math.random(),
    description: "Repeat the redux workshop",
    isDone: false,
  },
  {
    id:Math.random(),
    description: "Work on the Redux Chekpoint",
    isDone: false,
  },
  {
    id:Math.random(),
    description: "Read 10 pages of my book",
    isDone: false,
  },

  {
    id:Math.random(),
    description: "Walk the dog",
    isDone: false,
  },
];

const todoReducer = (state = list, {type,payload}) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case COMPLETE:
      return state.map(el=>el.id===payload?{...el,isDone:!el.isDone}: el);
    case EDIT:
      return state.map(el=>el.id===payload.id?{...el,description:payload.taskModified}:el)
    case DELETE:
      return state.filter(el=>el.id!==payload);

    default:
      return state;
  }
};
export default todoReducer;
