import React from "react";

export default class SearchBar extends React.Component{
    render()
    {
        return(
            <>
            <div className = "form-group">
                <input type="Search"
                className= "form-control"
                placeholder= "Search Here !" />
            </div>
            </>

        );
    }
}