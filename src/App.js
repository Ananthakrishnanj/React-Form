import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Register from './components/Register';
import CreateForm from './components/CreateForm';
import SubmitForm from './components/SubmitForm';
import Error from './components/Error';
import { HomePath, CreateFormPath, SubmitFormPath } from './constants/RoutePath';


function App() {

  return (    
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={HomePath} component={Register} exact />
          <Route path={CreateFormPath} component={CreateForm} />
          <Route path={SubmitFormPath} component={SubmitForm} />
          <Route component={Error} />
        </Switch>
      </Router>    
  );
}

export default App;
