import { useState } from "react";
import Cookies from "js-cookie"
import * as UI from "./style.ts"
import { NavBar } from "./components/NavBar";
import {TodoList} from "./components/TodoList";

export const App = () => {
    const [ theme, setTheme ] = useState<string | undefined>(Cookies.get('voitenko_todo_theme') || 'light')

    return (
        <UI.RootContainer theme={theme}>
            <NavBar theme={theme} setTheme={setTheme}/>
            <TodoList/>
        </UI.RootContainer>
    )
}

