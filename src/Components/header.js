import React from 'react';

const HeaderComponent = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-light">
                <div className="container-fluid px-0">
                    <h1 className="navbar-brand fs-3">My ToDo List</h1>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default HeaderComponent;