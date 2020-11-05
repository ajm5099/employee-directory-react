import React from "react";

function Header(props) {
    return <div>
        <nav className="navbar navbar-light bg-light justify-content-between" />
            <a className="navbar-brand" href="www.google.com">Navbar</a>
            <form className="form-inline" />
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Employee Directory</button>
            <p>Click on headers to filter by heading, or use the search box to narrow your results.</p>
    </div>
}

export default Header;