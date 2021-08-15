import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {Route,Switch} from "react-router-dom"

import { withAuthenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Calculator from './componets/Calculator';



Amplify.configure(awsconfig);
function App() {
return (
    <div className="App">
      <header className="App-header">
      < Navbar/> 
        <Switch>
      <Route path="/" component= {Calculator}/>
      {/* <Route path="/paytm" component= {Paytm}/> */}

      </Switch>
     
        </header>
        
    </div>
  );
}


export default withAuthenticator(App);
