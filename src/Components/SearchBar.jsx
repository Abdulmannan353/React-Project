import React from "react";

export default class SearchBar extends React.Component{

    state={
        term: ""
    };
    onInputChange= (event)=>{
        this.setState({term: event.target.value});
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render()
    {
        return(
            <>
            <form onSubmit={this.onFormSubmit}>
            <div className = "form-group">
                <input type="Search"
                className= "form-control"
                placeholder= "Search Here !"
                value= {this.state.term}
                onChange = {this.onInputChange} />
            </div>
            </form>
            </>

        );
    }
}