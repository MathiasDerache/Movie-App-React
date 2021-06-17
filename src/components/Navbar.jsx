import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/clapper.svg'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={logo} alt="PopCorn" className="navImage"/>
                </div>
                <ul className="nav">
                    <li className="items">
                        <NavLink exact to ="/" className="nav-link" activeClassName="text-muted">Home</NavLink>
                    </li>

                    <li className="items">
                    <NavLink exact to ="/favoris" className="nav-link" activeClassName="text-muted">Favorites</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar
