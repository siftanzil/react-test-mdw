import React from "react";

const Search = ( { searchFilter } ) => {
    console.log();
    return (
        <div>
            Search contact{ " " }
            <input
                onChange={ ( e ) => {
                    searchFilter( e.target.value );
                } }
            />
        </div>
    );
};

export default Search;
