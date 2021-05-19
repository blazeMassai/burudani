import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        // console.log('hey')
    }

    onFormSubmit = (event) => {

        event.preventDefault(); //prevents the whole application from refreshing
        // this.props.onSubmit(this.state.term);
        this.props.onFormSubmit(this.state.term);//hii ndio itapeleka kwenye app.js

    }


    render() {
        return (
            <div className="ui basic segment">

                <form onSubmit={this.onFormSubmit} className="ui form"> 

                    <div className="search-bar ui icon input">

                        <input type="text"
                         placeholder="Search Video.." 
                         value={this.state.term}
                         onChange={this.onInputChange} />

                        <i className="red circular search link icon"></i>

                    </div>

                </form>

            </div>
            
        )
    }
}

export default SearchBar