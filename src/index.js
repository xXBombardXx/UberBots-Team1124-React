import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ContactUs from './views/contact-us'
import Achievements from './views/achievements'
import Donate from './views/donate'
import Home from './views/home'
import Mentor from './views/mentor'
import Sponsors2 from './views/sponsors2'
import Sponsors from './views/sponsors'
import FIRSTInfo from './views/first-info'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Achievements} exact path="/achievements" />
        <Route component={Donate} exact path="/donate" />
        <Route component={Home} exact path="/" />
        <Route component={Mentor} exact path="/mentor" />
        <Route component={Sponsors2} exact path="/sponsors2" />
        <Route component={Sponsors} exact path="/sponsors" />
        <Route component={FIRSTInfo} exact path="/first-info" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
