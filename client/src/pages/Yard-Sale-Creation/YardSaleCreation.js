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
import ProductEdit from "../../components/Edit-Product/ProductEdit"

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
        intCounter: 0,
        userYardSales: [],
        products: [],
        editImageUrl: "",
        editProductName: "",
        editPrice: "",
        editQuantity: "",
        editCategory: "",
        editDescription: "",
    }

    componentDidMount(){
        API.getUser(this.props.id)
            .then(res => this.setState({userYardSales: this.state.userYardSales.concat(res.data.yardSales)}))
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitYardSale = () => {
        this.setState({userID: this.props.id})
        this.setState({displayProducts: true})
        let newSale = {
            name: this.state.name,
            address: this.state.address,
            zipCode: this.state.zipCode,
            date: new Date(this.state.date + ":00Z")
        }
        API.createYardSale(this.props.id, newSale)
            //Gets the newest yard sale that the user creates after submitting the info so they can
            //add products to it
            .then(res => this.setState({ yardSaleID: res.data.yardSales[(res.data.yardSales.length - 1)] }))
            .catch(err => console.log(err))
    }

    submitItem = () => {
        let newItem = {
            productName: this.state.productName,
            imageUrl: this.state.imageUrl,
            category: this.state.category,
            quantity: this.state.quantity,
            price: this.state.price,
            description: this.state.description,
            interest: this.state.interest
        }
        API.createNewProduct(newItem)
            //Pushes each new item _id that is created to an array so that can be saved to update the new sale
            //with new product listings
            .then(res => this.setState({products: this.state.products.concat(res.data), productName: "", imageUrl: "", category: "", quantity: "", price: "", description: "", interest: ""}))
            .catch(err => console.log(err))
    }

    finalizeYardSale = () => {
        this.state.products.forEach(product => {
            API.updateYardSale(this.state.yardSaleID, product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        })
    }

    editYardSale = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        let editSale = {
            name: this.state.name,
            address: this.state.address,
            zipCode: this.state.zipCode,
            date: new Date(this.state.date + ":00Z")
        }
        API.updateYardSaleEdit(this.state.yardSaleID, editSale)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    beginEdit = (event) => {
        this.setState({ editItem: true });
    }

    editProduct = (id) => {
        let editItem = {
            productName: this.state.editProductName,
            imageUrl: this.state.editImageUrl,
            category: this.state.editCategory,
            quantity: this.state.editQuantity,
            price: this.state.editPrice,
            description: this.state.editDescription,
            interest: this.state.interest
        }

        API.updateListing(id, editItem)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.props.id ? (
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

                   <YardSaleCreationElement>
                       <button onClick={this.submitYardSale}>Submit</button>
                    </YardSaleCreationElement>
                   <YardSaleCreationElement>
                       <button onClick={this.editYardSale}>Edit Yard Sale</button>
                    </YardSaleCreationElement>
               </YardSaleCreationWrapper>
                    ): 
                        (<div><h1>Must Be Logged In to Create A Yard Sale</h1></div>
                    )}
                {this.state.displayProducts ? (
                    <YardSaleCreationWrapper>
                           <h1>Add an Item to Sell</h1>
                           <ProductHolder>
                           <YardSaleCreationProductsWrapper>
                               <YardSaleCreationItemElements>Product Name: <ProductsInput type="text" name="productName" value={this.state.productName} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                               <YardSaleCreationItemElements>Image URL: <ProductsInput type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                               <YardSaleCreationItemElements>Price: <ProductsInput type="text" name="price" value={this.state.price} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                               <YardSaleCreationItemElements>Quantity: <ProductsInput type="text" name="quantity" value={this.state.quantity} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                               <YardSaleCreationItemElements>Category: <ProductsInput type="text" name="category" value={this.state.category} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>   

                               <YardSaleCreationItemElements>Description: <textarea name="description" value={this.state.description} onChange={this.handleInput}></textarea></YardSaleCreationItemElements>

                               <YardSaleCreationItemElements><FormBtn onClick={this.submitItem}>Submit Item</FormBtn></YardSaleCreationItemElements>
                           </YardSaleCreationProductsWrapper>
                           </ProductHolder>
               </YardSaleCreationWrapper>
                ):(
                    <div></div>
                )}
                <YardSaleCreationWrapper>
                    {this.state.products.length > 0 ? (
                            <List>
                                <h1>Items for Sale</h1>
                                
                                {this.state.products.map(product => (
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
                                        <YardSaleCreationElement><button onClick={this.beginEdit}>Edit</button></YardSaleCreationElement>
                                        {this.state.editItem ? (
                                            <YardSaleCreationProductsWrapper>
                                                <ProductEdit 
                                                    handleInput = {this.handleInput}
                                                    id = {product._id}
                                                    handleClick = {this.editProduct}
                                                    editProductName = {this.state.editProductName}
                                                    editImageUrl = {this.state.editImageUrl}
                                                    editPrice = {this.state.editPrice}
                                                    editQuantity = {this.state.editQuantity}
                                                    editCategory = {this.state.editCategory}
                                                    editDescription = {this.state.editDescription}
                                                />
                                            </YardSaleCreationProductsWrapper>
                                        ):(
                                            <div></div>
                                        )}
                                        <button onClick={this.deleteProduct}>Delete</button>
                                    </ListItem>              
                                ))}
                            <YardSaleCreationElement>
                                <button onClick={this.finalizeYardSale}>Finalize Yard Sale</button>
                            </YardSaleCreationElement>
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                </YardSaleCreationWrapper>
            </div>
        );
    }
}

export default YardSaleCreation;