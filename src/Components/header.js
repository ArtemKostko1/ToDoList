import React, {Component} from 'react';

//___________________________________________________________________________

export default class HeaderComponent extends Component {
    state = {
        searchItem: ''
    };

    onSearchChange = (e) => {
        const searchItem = e.target.value;
        this.setState({ searchItem });
        this.props.onSearchChange(searchItem);
    };

    //------------------------------------------------------------------------

    render () {
        return (
            <header className="header">
                <nav className="navbar navbar-light py-0 my-2">
                    <div className="navbar container-fluid px-0 py-0">
                        <h1 className="navbar-brand fs-2">My ToDo List</h1>
    
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Type to search" 
                                value={ this.state.searchItem } 
                                onChange={ this.onSearchChange }/>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
};