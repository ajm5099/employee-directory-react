import React from "react";
import "./style.css"

function Header(props) {
    return <div>
        <nav className="navbar navbar-light bg-light justify-content-between" />
            <a className="navbar-brand center headText" href="www.google.com">Employee Directory</a>
            <p className="center insText">Click on headers to filter by heading, or use the search box to narrow your results.</p>
    </div>
}

export default Header;