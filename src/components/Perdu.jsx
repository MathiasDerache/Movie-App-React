import React, { Component } from 'react'
import logo from '../images/robot.png'

export class Perdu extends Component {
    render() {
        return (
            <div className="lost">
                <div>
                    <h1>Error 404 !</h1>
                </div>
                <div>
                    <img src={logo} alt="robot" />
                </div>
                <div>
                    <h1>Oops ! that page doesn't exist ...</h1>
                </div>
            </div>
        )
    }
}

export default Perdu
