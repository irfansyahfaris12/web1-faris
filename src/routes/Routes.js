import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "../container/App"

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>


    )
}
