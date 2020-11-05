import React from "react";

function Header(props) {
    return <div>
        <nav className="navbar navbar-light bg-light justify-content-between" />
            <a className="navbar-brand" href="www.google.com">Employee Directory</a>
            <p>Click on headers to filter by heading, or use the search box to narrow your results.</p>
    </div>
}

export default Header;