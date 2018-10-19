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
import YardSaleCreationSales from "../../components/YardSaleCreationSales/YardSaleCreationSales"
import collage from '../../images/collage.jpg'

const BodyWrapper = styled('div')({
    width: '100%',
    minHeight: '80vh',
    alignItems: 'center',
    display: 'flex',
    backgroundSize: 'cover',
    background: `url("${collage}")`
  });


const YardSaleCreationWrapper = styled('div')({
    margin: 20,
    alignContent: 'center',
    alignItems: "center",
    flex: 1,
    background: "white"
})


const ProductHolder = styled('div')({
    display: "inline-block"
})
const YardSaleCreationProductsWrapper = styled('div')({
    margin: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
})
const YardSaleCreationElement = styled('div')({
    margin: 15,
    alignItems: "center"
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

const resultsDisplay = {
    color: 'white',
  }

class YardSaleCreation extends Component {
    state = {
        displayProducts: false,
        address: "Street, City, State",
        zipCode: 12345,
        name: "Yard Sale Name",
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

    componentDidMount() {
        API.getUser(this.props.id)
            .then(res => this.setState({ userYardSales: this.state.userYardSales.concat(res.data.yardSales) }))
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitYardSale = () => {
        this.setState({ userID: this.props.id })
        this.setState({ displayProducts: true })
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
            .then(res => this.setState({ products: this.state.products.concat(res.data) }))
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

    beginEdit = () => {
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
            .then(this.setState({ editItem: true }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <BodyWrapper>
                {this.props.id ? (
                    <YardSaleCreationWrapper>
                        <h3>Enter Your Sale's Info</h3>
                        {/* Name of Sale */}
                        <YardSaleCreationElement>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input></YardSaleCreationElement>
                        {/* Address */}
                        <YardSaleCreationElement>Address: <input type="text" name="address" value={this.state.address} onChange={this.handleInput}></input></YardSaleCreationElement>
                        {/* Zip Code */}
                        <YardSaleCreationElement>Zip Code: <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleInput}></input></YardSaleCreationElement>
                        {/* Date of Sale */}
                        <YardSaleCreationElement>Sale Date: <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleInput}></input></YardSaleCreationElement>
                        <YardSaleCreationElement>
                            <button onClick={this.submitYardSale}>Submit</button>
                        </YardSaleCreationElement>
                        <YardSaleCreationElement>
                            <button onClick={this.editYardSale}>Edit Yard Sale</button>
                        </YardSaleCreationElement>
                    </YardSaleCreationWrapper>
                ) :
                    (<div><h1 style={resultsDisplay}>Must Be Logged In to Create A Yard Sale</h1></div>
                    )}
                {this.state.displayProducts ? (
                    <Container fluid>
                    <YardSaleCreationWrapper>
                        <Row>
                            <Col size="md-6">
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
                            </Col>
                        </Row>
                    </YardSaleCreationWrapper>
                    </Container>
                ) : (
                        <div></div>
                    )}
                <Container fluid>
                    <Row>
                        <Col size="md-6 sm-12">
                            <YardSaleCreationWrapper>
                                <h1>Items for Sale</h1>
                            
                            {this.state.products.length > 0 ? (
                                <List>
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
                                                <ProductHolder>
                                                    <YardSaleCreationProductsWrapper>
                                                        <YardSaleCreationItemElements>Product Name: <ProductsInput type="text" name="editProductName" value={product.productName} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                                        <YardSaleCreationItemElements>Image URL: <ProductsInput type="text" name="editImageUrl" value={product.imageUrl} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                                        <YardSaleCreationItemElements>Price: <ProductsInput type="text" name="editPrice" value={product.price} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                                        <YardSaleCreationItemElements>Quantity: <ProductsInput type="text" name="editQuantity" value={product.quantity} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                                        <YardSaleCreationItemElements>Category: <ProductsInput type="text" name="editCategory" value={product.category} onChange={this.handleInput}></ProductsInput></YardSaleCreationItemElements>

                                                        <YardSaleCreationItemElements>Description: <textarea name="editDescription" value={product.description} onChange={this.handleInput}></textarea></YardSaleCreationItemElements>

                                                        <YardSaleCreationElement><button onClick={this.editProduct(product._id)}>Edit</button><br></br></YardSaleCreationElement>
                                                        
                                                    </YardSaleCreationProductsWrapper>
                                                </ProductHolder>
                                            ) : (
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
                        </Col>
                    </Row>
                </Container>

            </BodyWrapper>

            </div>
        );
    }
}

export default YardSaleCreation;