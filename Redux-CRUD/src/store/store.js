import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";


const store = configureStore({
    reducer : {
        users : reducer
    }
})

export default store;