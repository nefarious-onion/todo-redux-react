import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import CreateProject from './components/CreateProject/CreateProject';


const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
               <Navbar />
               <Switch>
                   <Route path='/' exact component={Dashboard} />
                   <Route path='/project/:id' component={ProjectDetails}/>
                   <Route path='/signin' component={SignIn}/>
                   <Route path='/signup' component={SignUp}/>
                   <Route path='/create' component={CreateProject}/>
               </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
