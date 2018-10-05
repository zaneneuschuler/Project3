import React, { Component } from "react";
import styled from 'react-emotion'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YardSaleListings from "./pages/Yard-Sale-Listings/YardSaleListings"

import Header from "./components/Header/Header"
import BodyMain from "./components/Body-main/BodyMain"

// const Header = styled('div')({
//   width: '100%',
//   height: 50,
//   boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
//   textAlign: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// })

const Content = styled('div')({
  marginTop: 50,
  textAlign: 'center'
})

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Content>

        {/* <BodyMain /> */}
        </Content>


{/*           
        <Content>

          Mern boilerplate with react-emotion
          <YardSaleListings />
        </Content> */}
      </div>
      </Router>
    );
  }
}

export default App;
