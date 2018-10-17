import React, { Component } from "react";
import styled from 'react-emotion'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import YardSaleListings from "./pages/Yard-Sale-Listings/YardSaleListings"
import Header from './components/Header'
// import Welcome from './pages/Welcome/Welcome'
import Contact from './pages/Contact/Contact'
import About from "./pages/About/About"
// import LoginFormItem from './components/LoginForm/LoginForm'
import BodyMain from "./components/Body-main/BodyMain";
import Products from "./pages/Products"
import UserRegistration from "./pages/User-Registration/UserRegistration"
import YardSaleCreation from "./pages/Yard-Sale-Creation/YardSaleCreation"
import API from './utils/API'

// import Modal from "./components/ModalForm/ModalForm";


const Content = styled('div')({
  textAlign: 'center'
})

class App extends Component {
  state = {
    loggedIn: false,
    email: '',
    password: '',
    type: '',
    id: "",
    showLoginForm: true,
    showRegistrationForm: true
  }

    
  // componentDidMount = () => {
  //   if(getCookie("id") !== ""){
  //     this.setState({
  //       id: getCookie("id"),
  //       loggedIn: true
  //     })
  //   }
  // }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
    [name]: value
    })
}

handleFormLogin = event => {
  event.preventDefault();
  if (this.state.email && this.state.password) {
    API.login({
      "email": this.state.email,
      "password": this.state.password,
    })
      .then((data) => {
        this.setState({
          showLoginForm: false,
          id: data.data.user._id,
          loggedIn: true,
          showRegistrationForm: false
        }, function() {

          console.log('data: ', this.state)
        })
      })
      .catch(err => console.log('fail to log in: ', err));
  }
};

  render() {
    return (

      <Router>
        <div>
          <Header id={this.state.id} handleFormLogin={this.handleFormLogin} handleInputChange={this.handleInputChange}/>
          <Content>
            <Switch>
              <Route exact path="/" component={BodyMain} />
              <Route exact path="/about" component={About} />
              <Route path="/header" render={() => <Header showLoginForm={this.state.showLoginForm} /> } />
              <Route path="/contact" component={Contact} />
              <Route path="/register" render={() => <UserRegistration id={this.state.id} /> } />
              <Route exact path="/yardsalelistings" component={YardSaleListings} />
              <Route path="/products/*" component={Products} />
              <Route path="/yardsalecreation" render={() => <YardSaleCreation id={this.state.id} />}/>
            </Switch>
          </Content>
        </div>
      </Router>     

    );
  }
}

export default App;
