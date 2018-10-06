import React, { Component } from "react";
import styled from 'react-emotion'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import YardSaleListings from "./pages/Yard-Sale-Listings/YardSaleListings"
import Header from './components/Header'
import Welcome from './pages/Welcome/Welcome'
import Contact from './pages/Contact/Contact'
import About from "./pages/About/About"
import Login from './pages/Login/Login'
import BodyMain from "./components/Body-main/BodyMain";
// import Modal from "./components/ModalForm/ModalForm";


const Content = styled('div')({
  textAlign: 'center'
})

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              {/* <Route path="/registration" component={Registration} /> */}
              <Route path="/YardSaleListings" component={YardSaleListings} />
              
            </Switch>
          <BodyMain >
            {/* <Modal /> */}
          </BodyMain>
          
          </Content>
        </div>
      </Router>     

    );
  }
}

export default App;
