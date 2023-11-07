import * as UI from "../../style.ts"
import * as LUI from "./style.ts"
import { Dispatch } from "react";
import { Search } from "../Search";
import { Theme } from "../Search/style.ts";

interface INavBar {
    theme: string | undefined
    setTheme: Dispatch<string | undefined>
}
export const NavBar = (props: INavBar) => {
    const { theme, setTheme } = props

    const changeTheme = () => {
        switch (theme) {
            case 'light':
                setTheme('dark')
                break
            case 'dark':
                setTheme('light')
        }
    }
    return (
        <UI.Container theme={theme}>
            <LUI.NavBarBlock>
                <h2>Todo App</h2>
                <Search/>
                <Theme current={theme}>
                    <div onClick={changeTheme}></div>
                </Theme>
            </LUI.NavBarBlock>
        </UI.Container>
    )
}