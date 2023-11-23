import React, { useEffect, useState } from "react";
import {
  completeTodo,
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../apiHandlers/api";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [setTodos]);

  const fetchTodos = async () => {
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (error) {}
  };

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

  const deleteHandler = async (id) => {
    try {
      await deleteTodo(id);
      const allTodos = todos.filter((todo) => todo._id !== id);
      setTodos(allTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleTodo = async (todo) => {
    setEditMode(true);
    setUpdateId(todo._id);
    setTitle(todo.title);
  };


  // update todo
  const updateHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await updateTodo(updateId, { title: title });

      setTodos((todos) =>
        todos.map((todo) => {
          if (todo._id === res._id) {
            return { ...todo, title: title };
          }
          return todo;
        })
      );
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setUpdateId("");
    setEditMode(false);
  };

  // complete task
  const completeTask = async (id) => {
        try {
          const res = await completeTodo(id);

          console.log(res);
          setTodos((todos) =>
          todos.map((todo) => {
            if (todo._id === res._id) {
              // todo.completed = !todo.completed;
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
        } catch (error) {
          console.log(error);
        }
  }

  return (
    <div>
      <form onSubmit={editMode ? updateHandler : createHnadler}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> {editMode ? "Update" : "Add"} </button>
      </form>

      <div className="container">
        {todos?.map((todo) => (
          <div className={`card ${todo.completed ? "completed" : ""}`} key={todo?._id}>
            <div className="box" onClick={() => completeTask(todo._id)}>
            <p className="checkBox"></p>
            <h3>{todo.title}</h3>
            </div>
           
            <div className="actions">
              <FaEdit onClick={() => getSingleTodo(todo)} />
              <MdDelete onClick={() => deleteHandler(todo._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
