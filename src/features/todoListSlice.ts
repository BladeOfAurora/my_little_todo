import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem, todoItems } from "../components/data.ts";

const initialState: ITodoItem[] = todoItems

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<number>) => {
            const findIndex = initialState.findIndex((item: ITodoItem) => item.id === action.payload)
            switch (state[findIndex].status) {
                case 'completed':
                    state[findIndex].status = 'active'
                    break
                case 'active':
                    state[findIndex].status = 'completed'
            }
        }
    }
})

export const { changeStatus } = todoListSlice.actions
export default todoListSlice.reducer