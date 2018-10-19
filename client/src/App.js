import React, { Component } from "react";
import styled from 'react-emotion'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import YardSaleListings from "./pages/Yard-Sale-Listings/YardSaleListings"
import Header from './components/Header'
import Contact from './pages/Contact/Contact'
import About from "./pages/About/About"
import BodyMain from "./components/Body-main/BodyMain";
import Products from "./pages/Products"
import UserRegistration from "./pages/User-Registration/UserRegistration"
import YardSaleCreation from "./pages/Yard-Sale-Creation/YardSaleCreation"
import API from './utils/API'

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
    type: '',
    id: "",
    showLoginForm: true,
    showRegistrationForm: true
  }

    
  componentDidMount = () => {
    console.log(getCookie("id"));
    if(getCookie("id") !== ""){
      this.setState({
        id: getCookie("id"),
        loggedIn: true,
        showLoginForm: false
      })
    }

  }

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
        document.cookie = `id=${data.data.user._id}`

        this.setState({
          email: "",
          password: "",
          showLoginForm: false,
          id: data.data.user._id,
          loggedIn: true,
          showRegistrationForm: false
        }, function() {
        })
      })
      .catch(err => console.log('fail to log in: ', err));
  }
};

handleRegistrationSubmit = event => {
  event.preventDefault();
  console.log("foo");
  
  if (this.state.first && this.state.last && this.state.email && this.state.password) {
    let newUser = {
     'First': this.state.First,
      "Last": this.state.Last,
      "email": this.state.email,
      "password": this.state.password,
    };
    
    axios.post("/auth/signup", newUser)
    .then(response => {
      var userId = response.data._id
      console.log('reponse.id: ', userId)
      this.setState({ id: userId }, function (){
        console.log('this.state.id', this.state.id)
        this.state.id ? 
          API.login({
            'email': this.state.email,
            'password': this.state.password
          })
          : console.log('userId is empty')
        
          this.setState({
              showRegistrationForm: false,
              showSignInForm: false,
              loggedIn: true
            }, function(){
              console.log('setData: ', this.state)
            })
          })
        })
        .catch(err => console.log(err));
  }
};

componentDidUpdate = () => {
  console.log(this.state);
  
}

  render() {
    return (

      <Router>
        <div>
          <Header id={this.state.id} handleFormLogin={this.handleFormLogin} loggedIn={this.state.loggedIn} handleInputChange={this.handleInputChange}/>
          <Content>
            <Switch>
              <Route exact path="/" render={() => <BodyMain id={this.state.id} handleRegistrationSubmit={this.handleRegistrationSubmit} handleInputChange={this.handleInputChange} loggedIn={this.state.loggedIn} last={this.state.last} first={this.state.first} email={this.state.email} password={this.state.password}/>} />
              <Route exact path="/about" component={About} />
              <Route path="/header" render={() => <Header showLoginForm={this.state.showLoginForm} /> } />
              <Route path="/contact" component={Contact} />

              <Route path="/register" render={() => <UserRegistration id={this.state.id} handleRegistrationSubmit={this.handleRegistrationSubmit} handleInputChange={this.handleInputChange} loggedIn={this.state.loggedIn} last={this.state.last} first={this.state.first} email={this.state.email} password={this.state.password}/> } />


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
