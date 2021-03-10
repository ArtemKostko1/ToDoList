import React from 'react';

const HeaderComponent = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-light py-0 my-2">
                <div className="navbar container-fluid px-0 py-0">
                    <h1 className="navbar-brand fs-2">My ToDo List</h1>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Type to search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">
                            <i className="fa fa-search"/>
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;