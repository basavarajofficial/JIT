import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../store/reducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let users = useSelector((state) => state.users);

    let submitHandler = (e) => {
        e.preventDefault();
        dispatch(create({id : users.length > 0 ?   users[users.length - 1].id + 1 : 1, name , email  }))
        navigate('/');
    }

  return (
    <div>
        <h1>Create- users : </h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" 
            onChange={(e) => setName(e.target.value) } />
            <br />
            <label htmlFor="email">Email : </label>
            <input type="email" name="email"
            onChange={(e) => setEmail(e.target.value) }
            />

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Create