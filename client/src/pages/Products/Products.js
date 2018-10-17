import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import Container from "../../components/Grid/Container";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import { List, ListItem } from "../../components/List";
import ProductCard from "../../components/ProductCard";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
const params = {v: '3.exp', key: process.env.GMAPS_KEY};

class Products extends Component {

    state = {
        yardsaleID: this.props.location.pathname.split('/')[2],
        yardsale: [],
        products: [],
        category: "",
        title: "",
        seller: "",
        price: "",
        imgURL: "",
        description: "",
        intCounter: 0,
        lat: 0,
        lng: 0
    };
      onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true
        });
      }

      onDragEnd(e) {
        console.log('onDragEnd', e);
      }

      onCloseClick() {
        console.log('onCloseClick');
      }

      onClick(e) {
        console.log('onClick', e);
      }

    componentDidMount() {
      this.loadProducts();
      this.loadYardSaleInfo();
    }

    getGmap = (address) => {
        console.log(address);
        axios.post("/api/gMaps", address).then(res => this.setState({lat: res.data.lat, lng: res.data.lng}))
    }

    loadProducts = () => {
      API.getYardSale(this.state.yardsaleID)
        .then(res => this.setState({products: this.state.products.concat(res.data.listings)}))
        .catch(err => console.log(err))
    }

    loadYardSaleInfo = () => {
      API.getYardSale(this.state.yardsaleID)
      .then(res => this.setState({yardsale: res.data}, this.getGmap(res.data))
      // .then(function(res){
      //   console.log(res.data);
      //   this.setState({yardsale: res.data})
      //   this.getGmap(res.data);
      // }
      )}

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Yard Sale Listings</h1>
                                        <Gmaps
        width={'100%'}
        height={"200px"}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={15}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.lat}
          lng={this.state.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Circle
          lat={this.state.lat}
          lng={this.state.lng}
          radius={200}
          onClick={this.onClick} />
                </Gmaps>
              </Jumbotron>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Products on Sale in my Yard</h1>
                <h2>{this.state.yardsale.name}</h2>
                <h3>{this.state.yardsale.date} | {this.state.yardsale.address} | {this.state.yardsale.zipCode}</h3>

              </Jumbotron>
              {this.state.products.length ? (
                <List>
                  {this.state.products.map(product => (
                    <ListItem>
                      <ProductCard key={product._id} 
                        imageUrl ={product.imageUrl} 
                        product = {product.productName}
                        price = {product.price}
                        quantity = {product.quantity}
                        category = {product.category}
                        description = {product.description}
                        interest = {this.state.intCounter}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  }
export default Products;