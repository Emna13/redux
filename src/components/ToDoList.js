import React, { useState } from 'react'
import AddTask from './AddTask'
import {useSelector} from "react-redux"
import ListTask from './ListTask'

const ToDoList = () => {
    const list = useSelector(state => state)
    const [filter, setFilter] = useState(false)
    const handleFilter=()=>{
        setFilter(!filter)
    }
    return (
        <div>
            <AddTask handleFilter={handleFilter} filter={filter}/>
            <ListTask list={filter? list.filter(el=>el.isDone):list}/>
        </div>
    )
}

export default ToDoList
