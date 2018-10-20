import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import Container from "../../components/Grid/Container";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import { List, ListItem } from "../../components/List";
import ProductCard from "../../components/ProductCard";
import {Gmaps, Marker, Circle} from "react-gmaps";
import moment from "moment";

const params = {v: '3.exp', key:process.env.GMAPS_KEY};
class Products extends Component {

    state = {
        yardsaleID: this.props.location.pathname.split('/')[2],
        yardsale: "",
        products: [],

        category: "",
        title: "",
        seller: "",
        price: "",
        imgURL: "",
        description: "",
        intCounter: [],
        lat: "",
        lng: ""
    };
    

    componentDidMount() {
      this.loadProducts();
      this.loadYardSaleInfo();
    }

    componentDidUpdate(prevprops, prevstate) {
      console.log(prevstate);
      console.log(this.state.yardsale)
      if(!prevstate.yardsale && this.state.yardsale ){
        this.getCoordinates();
      }
    }

    loadProducts = () => {
      this.setState({products: []});
      API.getYardSale(this.state.yardsaleID)
        .then(res => this.setState({products: this.state.products.concat(res.data.listings)}))
        .catch(err => console.log(err))
    }

    loadYardSaleInfo = () => {
      API.getYardSale(this.state.yardsaleID)
      .then(res => this.setState({yardsale: res.data}))
      .catch(err => console.log(err))
    }

    updateInterest = (id) => {
      console.log(id);
      if(this.state.intCounter.includes(id)){
        alert("You already added interest for this item!");
      }else{
        API.incrementInterest(id)
          .then(this.setState({
            intCounter: [...this.state.intCounter, id]
          }, this.loadProducts()));
      }
    }


    getCoordinates = () => {
      console.log(this.state.yardsale)
      API.getCoordinates(this.state.yardsale.address, this.state.yardsale.zipCode)
      .then(res => this.setState({lat: res.data.lat, lng: res.data.lng}))
      .catch(err => console.log(err));
    }

    render() {
      return (
        <Container fluid>
          <Row>
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
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>{this.state.yardsale.name}</h1><br></br> 
                <h3>{this.state.yardsale.address} | {this.state.yardsale.zipCode}</h3> 
                <h3>{moment(this.state.yardsale.date).format('MM-DD-YY h:mm a')}</h3><br></br>

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
                        interest = {product.interest}
                        clickHandle = {this.updateInterest}
                        id = {product._id}
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