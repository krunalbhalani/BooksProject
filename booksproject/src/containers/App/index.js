import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BooksList from '../BooksList';
import Home from '../Home';

const App = () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BooksList} />
        <Route path="/books/:id" component={BooksList} />
    </Router>
);

export default App;
