import React, {ChangeEvent} from "react";
import './search-box.styles.css';

interface ISearchBoxProps {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: ISearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;