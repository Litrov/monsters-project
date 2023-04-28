import React from "react";
import './search-box.styles.css';

const SearchBox = (props) => {
    return (
        <div>
            <input
                className="search-box"
                type="search"
                placeholder="search monsters"
                onChange={props.onSearch}
            />
        </div>
    )
}

export default SearchBox;