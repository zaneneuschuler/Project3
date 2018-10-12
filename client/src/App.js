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

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const Content = styled('div')({
  textAlign: 'center'
})

class App extends Component {
  state = {
    loggedIn: false,
    id: ""
  }

  componentDidMount = () => {
    if(getCookie("id") !== ""){
      this.setState({
        id: getCookie("id"),
        loggedIn: true
      })
    }
  }
  
  render() {
    return (

      <Router>
        <div>
          <Header loggedIn={this.state.loggedIn}/>
          <Content>
            <Switch>
              <Route exact path="/" component={BodyMain} />
              <Route exact path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Registration} />
              <Route exact path="/yardsalelistings" component={YardSaleListings} />
              <Route path="/products/*" component={Products} />
              <Route path="/yardsalecreation" component={YardSaleCreation} />
            </Switch>
          {/* <BodyMain > */}
            {/* <Modal /> */}
          {/* </BodyMain> */}
          
          </Content>
        </div>
      </Router>     

    );
  }
}

export default App;
