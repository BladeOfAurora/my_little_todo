import * as UI from "../../style.ts"
import * as LUI from "./style.ts"
import { ITodoItem } from "../data.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { TodoItem } from "../TodoItem";
export const TodoList = () => {
    const todoItems = useAppSelector(state => state.todos)
    return (
        <UI.Container style={{marginTop: "5px"}}>
           <LUI.TodoItemsContainer>
               {
                   todoItems.map((item: ITodoItem) => {
                       return (
                           <TodoItem key={item.id}
                                     id={item.id} label={item.label}
                                     status={item.status} date={item.date}
                           />
                       )
                   })
               }
           </LUI.TodoItemsContainer>
        </UI.Container>
    )
}