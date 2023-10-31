import { configureStore } from "@reduxjs/toolkit";
import todosReducers from "../features/todoListSlice.ts"
export const store = configureStore({
    reducer: {
        todos: todosReducers
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch