import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './components/Header'
import Front from './components/frontpage'
import Login from './components/login_signup'
import Feedback from './components/Feedback'
import About from './components/About'
import register from './components/register'

function App() {
  return (
    <Router>
           <Header />
    <Route  exact path='/'>
            <Front />
    </Route>

    <Route path='/login_signup'>
            <Login />
            <register />
            </Route>
<Route path='/Feedback'>
            <Feedback/>
            </Route>
            <Route path='/About'>
            <About/>
            </Route>
    

    </Router>
 

 
  )
}

export default App;
