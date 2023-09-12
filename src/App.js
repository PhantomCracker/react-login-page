import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import InputForm from "./components/InputForm";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={InputForm} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;
