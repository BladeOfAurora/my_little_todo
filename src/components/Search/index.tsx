import * as LUI from "./style.ts"
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce.ts";

export const Search = () => {
    const [ searchText, setSearchText ] = useState<string>('')
    const debounceValue = useDebounce<string>(searchText, 500)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        // dispatch
    }, [debounceValue])
    return (
        <LUI.Search type={'text'}
                    show={searchText.length}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        />
    )
}