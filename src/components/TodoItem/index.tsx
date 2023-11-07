import * as LUI from "./style.ts"
import cancelSvg from "../../assets/cancel.svg";
import completeSvg from "../../assets/complete.svg";
import trashSvg from "../../assets/trash.svg";
import { ITodoItem } from "../data.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { changeStatus } from "@/features/todoListSlice.ts";

export const TodoItem = (props: ITodoItem) => {
    const  { id, label, status } = props
    const dispatch = useAppDispatch()
    return (
        <LUI.TodoItem status={status}>
            <h4>{label}</h4>
            <LUI.ItemActions status={status}>
                <button type={"button"}
                        onClick={() => dispatch(changeStatus(id))}>
                    <img src={status === "completed" ?
                        cancelSvg
                        :
                        completeSvg
                    } alt={"Trash"}/>
                </button>
                <button type={"button"}
                        style={{background: "#d51111"}}>
                    <img src={trashSvg} alt={"Trash"}/>
                </button>
            </LUI.ItemActions>
        </LUI.TodoItem>
    )
}