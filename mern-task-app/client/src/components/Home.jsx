import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getAllTodos } from '../apiHandlers/api';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function Home() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const [editMode , setEditMode] = useState(false);
    const [updateId, setUpdateId] = useState("");

    useEffect(()=>{
        fetchTodos();
    }, [setTodos]);

    const fetchTodos = async () => {
        try {
            const data = await getAllTodos();
            setTodos(data);
        } catch (error) {
            
        }
    }

    const createHnadler = async (e) => {
        e.preventDefault();
        try {
            const data = { title: title };
            const newTodo = await createTodo(data);
        
            setTodos((currTodo) => {
                return [...currTodo, newTodo];
            });
    
            setTitle("");
        } catch (error) {
            console.log(error);
        }
      };

      const deleteHandler = async (id) =>{
        try {
            await deleteTodo(id)
            const allTodos = todos.filter((todo) => todo._id !== id);
            setTodos(allTodos);
        } catch (error) {
            console.log(error);
        }
      }

        // update todo
        const updateHandler = async () => {
            
        }


    return (
    <div>
        <form onSubmit={editMode ? updateHandler :   createHnadler}>
            <input type="text" name="title" value={title} 
                onChange={(e) => setTitle(e.target.value) }
            />
            <button type="submit"> {editMode ? "Update" : "Add"} </button>
        </form>

        <div className='container'>
        {
            todos.map((todo) => (
                <div className='card' key={todo?._id}>
                    <h3>{todo.title}</h3>
                    <div className='actions'>
                        <FaEdit onClick={() => setEditMode(!editMode)} />
                        <MdDelete onClick={() => deleteHandler(todo._id)}   />
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Home