import React, { Component } from "react";
import styled from 'react-emotion';
import API from "../../utils/API";
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
const ProductHolder = styled('div')({
    display: "inline-block"
})
const YardSaleCreationProductsWrapper = styled('div')({
    margin: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})
const YardSaleCreationElement = styled('div')({
    margin: 15
})
const YardSaleCreationItemElements = styled('div')({
    margin: 15,
    display: "flex",
    alignItems: "baseline",
    
})
const ProductsInput = styled('input')({
    marginLeft: 20,
    float: "right"
})

class YardSaleCreation extends Component {
    state = {
        displayProducts: false,
        address: "Street Address City, State", 
        zipCode: 12345, 
        name: "Your Yard Sale's Name", 
        date: "2018-12-3101:00",
        userID: "",
        yardSaleID: "",
        _id: "",
        imageUrl: "",
        productName: "",
        price: "",
        quantity: "",
        category: "",
        description: "",
        intCounter: 0
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitYardSale = () => {
        this.setState({userID: this.props.id})
        let newSale = {
            name: this.state.name,
            address: this.state.address,
            zipCode: this.state.zipCode,
            date: new Date(this.state.date + ":00Z")
        }
        API.createYardSale(this.props.id, newSale)
            .then(function (res) { console.log(res) })
            .catch(err => console.log(err))
    }

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
                            <ProductHolder>
                            <YardSaleCreationProductsWrapper>
                                <YardSaleCreationItemElements>Product Name: <ProductsInput type="text" name="productName" value={this.state.productName} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                <YardSaleCreationItemElements>Image URL: <ProductsInput type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                <YardSaleCreationItemElements>Price: <ProductsInput type="text" name="productPrice" value={this.state.price} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                <YardSaleCreationItemElements>Quantity: <ProductsInput type="text" name="quantity" value={this.state.quantity} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                <YardSaleCreationItemElements>Category: <ProductsInput type="text" name="category" value={this.state.category} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>   

                                <YardSaleCreationItemElements>Description: <textarea name="description" value={this.state.description} onChange={this.handleInput}></textarea></YardSaleCreationItemElements>

                                <YardSaleCreationItemElements><FormBtn>Submit Item</FormBtn></YardSaleCreationItemElements>
                            </YardSaleCreationProductsWrapper>
                            </ProductHolder>
                        </Col>
                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1>Items for Sale</h1>
                            </Jumbotron>
                            {this.state.length ? (
                                <List>
                                    {this.state.map(product => (
                                        <ListItem key={product._id}>
                                                <strong>
                                                    Product: {product.productName}
                                                    imageUrl: {product.imageUrl}
                                                    Price: {product.price}
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