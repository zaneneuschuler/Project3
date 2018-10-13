import React, { Component } from "react";
import styled from 'react-emotion';
import API from "../../utils/API";
import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import Container from "../../components/Grid/Container";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

const YardSaleCreationWrapper = styled('div')({
    margin: 20
})
const YardSaleCreationElement = styled('div')({
    margin: 15
})

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

class YardSaleCreation extends Component {
    state = {
        displayProducts: false,
        address: "Street Address City, State", 
        zipCode: 12345, 
        name: "Your Yard Sale's Name", 
        date: "2018-12-3101:00",
        userID: "",
        _id: "",
        imageUrl: "",
        productName: "",
        productPrice: "",
        quantity: "",
        category: "",
        description: "",
        intCounter: 0
    }
    
    componentDidMount = () => {
        if(getCookie("id") !== ""){
          this.setState({
            userID: getCookie("id"),
          })
        }
        console.log(this.state.userID)
      }


    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitYardSale = () => {
        let newSale = {
            name: this.state.name,
            address: this.state.address,
            zipCode: this.state.zipCode,
            date: new Date(this.state.date + ":00Z")
        }
        console.log(newSale)
        API.createYardSale(newSale)
            .then(function (res) { console.log(res) })
            .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        event.preventDefault();
 
      };
    
    render() {
        return (
            <div>
                <YardSaleCreationWrapper>
                    <h3>Enter Your Sale's Info Here</h3>
                    {/* Address */}
                    <YardSaleCreationElement>Address: <input type="text" name="address" value={this.state.address} onChange={this.handleInput}></input></YardSaleCreationElement>
                    {/* Zip Code */}
                    <YardSaleCreationElement>Zip Code: <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleInput}></input></YardSaleCreationElement>
                    {/* Date of Sale */}
                    <YardSaleCreationElement>Date of Sale: <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleInput}></input></YardSaleCreationElement>
                    {/* Name of Sale */}
                    <YardSaleCreationElement>Name of Your Sale: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input></YardSaleCreationElement>

                    <button onClick={this.submitYardSale}>Submit</button>
                </YardSaleCreationWrapper>
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                                <h1>Add an Item to Sell</h1>
                            <YardSaleCreationElement>Product Name: <input type="text" className="form-control" name="productName" value={this.state.productName} onChange={this.handleInput}></input></YardSaleCreationElement>
                            <YardSaleCreationElement>Price: <input type="text" className="form-control" name="productPrice" value={this.state.productPrice} onChange={this.handleInput}></input></YardSaleCreationElement>
                            <YardSaleCreationElement>Quantity: <input type="text" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleInput}></input></YardSaleCreationElement>
                            <YardSaleCreationElement>Category: <input type="text" className="form-control" name="category" value={this.state.category} onChange={this.handleInput}></input></YardSaleCreationElement>   
                            <YardSaleCreationElement>Description: <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleInput}></input></YardSaleCreationElement>
                            <YardSaleCreationElement>Picture (URL): <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInput}></input></YardSaleCreationElement>
                            <button onClick={this.handleFormSubmit}>Submit Item</button>
                        </Col>
                        <Col size="md-6 sm-12">
                                <h1>Items for Sale</h1>

                            {this.state.length ? (
                                <List>
                                    {this.state.map(product => (
                                        <ListItem key={product._id}>
                                                <strong>
                                                    Product: {product.productName}
                                                    imageUrl: {product.imageUrl}
                                                    Price: {product.productPrice}
                                                    Quantity: {product.quantity}
                                                    Category: {product.category}
                                                    Description: {product.description}
                                                    Interest: {product.interest}
                                                </strong>
                                            <DeleteBtn />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default YardSaleCreation;