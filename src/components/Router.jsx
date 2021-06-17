import React, { Component } from 'react'
import { createBrowserHistory} from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import { Main } from './Main/Main';
import { Favoris } from './Favoris/Favoris';
import { Perdu } from './Perdu';
import { Detail } from './Detail/Detail';

const history = createBrowserHistory()

export class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch history={history}>
                        <Route  exact path='/' component={Main}/>
                        <Route  path='/favoris' component={Favoris}/>
                        <Route  path='/detail' component={Detail}/>
                        <Route component={Perdu} />
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default Router
