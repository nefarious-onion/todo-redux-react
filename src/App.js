import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
               <Navbar />
               <Switch>
                   <Route path='/' exact component={Dashboard} />
                   <Route path='/project/:id' component={ProjectDetails}/>
               </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
