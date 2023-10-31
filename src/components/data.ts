type TStatus = "completed" | "active" | "deleted"
export interface ITodoItem {
    id: number
    label: string
    status: TStatus
    date: Date | string
}


export const todoItems: ITodoItem[] = [
    {
        id: 1,
        label: 'Up skill in algorithms',
        status: "active",
        date: "31.10.2022"
    },
    {
        id: 2,
        label: 'Learn react as deep',
        status: "active",
        date: "31.10.2021"
    },
    {
        id: 3,
        label: 'Learn FSD',
        status: "completed",
        date: "31.10.2020"
    },
]