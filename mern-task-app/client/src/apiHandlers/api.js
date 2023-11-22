import axios from 'axios';

const BASE_URL = "http://localhost:5000/todos";

export const getAllTodos = async (req, res) => {
    try {
        const allTodos = await axios.get(BASE_URL);

        return allTodos.data;
    } catch (error) {
        console.log(error);
    }
}


//create new todo
export const createTodo = async (title) => {
    try {
        const res = await axios.post(BASE_URL, title);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// delete todo
export const deleteTodo = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
}


// update todo
export const updateTodo = async (id, title) => {
    try {
        const result = await axios.patch(`${BASE_URL}/${id}` , title);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}