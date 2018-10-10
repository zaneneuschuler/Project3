import React, { Component } from "react";
import styled from 'react-emotion'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import YardSaleListings from "./pages/Yard-Sale-Listings/YardSaleListings"
import Header from './components/Header'
// import Welcome from './pages/Welcome/Welcome'
import Contact from './pages/Contact/Contact'
import About from "./pages/About/About"
import Login from './pages/Login/Login'
import BodyMain from "./components/Body-main/BodyMain";
import Products from "./pages/Products"
import Registration from "./pages/User-Registration/User-Registration"
import YardSaleCreation from "./pages/Yard-Sale-Creation/YardSaleCreation"
// import Modal from "./components/ModalForm/ModalForm";


const Content = styled('div')({
  textAlign: 'center'
})

class App extends Component {
  state = {
    id: "",
    loggedIn: false
  }
  render() {
    return (

      <Router>
        <div>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={BodyMain} />
              <Route exact path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Registration} />
              <Route exact path="/yardsalelistings" component={YardSaleListings} />
              <Route path="/products/*" component={Products} />
            </Switch>
          {/* <BodyMain > */}
            {/* <Modal /> */}
          {/* </BodyMain> */}
            <YardSaleCreation userID={this.state.id}/>
          </Content>
        </div>
      </Router>     

    );
  }
}

export default App;
