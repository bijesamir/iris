import React, { useEffect, useState } from "react";
import { Style } from "./Style"
import { Search, Close } from '@carbon/icons-react';
interface SearchBoxProps {
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    value:string
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onChange,value }) => {
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        setSearchText(value);
    },[value])
    const searchTextHandler = (e: any) =>{
        setSearchText(e.target.value);
        onChange(e);
    }
    return (
        <Style>
            <Search size="16" className="searchIcon" />
            <input type="text" value={searchText} onChange={searchTextHandler} /> <button onClick={()=>setSearchText("")}><Close size="16" className="closeIcon" /></button>
        </Style>
    )
}

export default SearchBox;