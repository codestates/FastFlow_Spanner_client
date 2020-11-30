import React from "react";
import { Link, withRouter } from "react-router-dom";

export default function Nav(props) {
    return (
        <header className="navs">
            <div>
                <Link to='/SignIn'>Log in</Link>
                <Link to='/SignUp'>Sign up</Link>
            </div>
            <div>
                <Link to='/Pages/MainPage'>logo</Link>
            </div>
        </header>
    )
}