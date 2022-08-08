import React from "react";

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