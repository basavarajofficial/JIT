import { createSlice } from "@reduxjs/toolkit";

const users = [
    {id : 1,
        name:"john",
        email : "john@example.com",
    },
    {id : 2,
        name:"smith",
        email : "smith@example.com",
    }
]

const initialState = users;
const reducer = createSlice({
    name : 'users',
    initialState,
    reducers:{
        // create action
        create(state, action){
            state.push(action.payload);
        },
        // delete user
        deleteUser(state, action){
            return state.filter((user)  => user.id !== action.payload)
        },
        updateUser(state, action){
            const { id, name, email } = action.payload;
            const findUser = state.find((user) => user.id == id);
            if(findUser){
                findUser.name = name;
                findUser.email = email;
            }
        }
    }
})
export const { create, deleteUser, updateUser } = reducer.actions;

export default reducer.reducer;