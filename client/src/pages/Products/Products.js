import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Container from "../../components/Grid/Container";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import { List, ListItem } from "../../components/List";
import ProductCard from "../../components/ProductCard";

class Products extends Component {

    state = {
        products: [],
        category: "",
        title: "",
        seller: "",
        price: "",
        imgURL: "",
        description: "",
        intCounter: ""
    };
    

    componentDidMount() {
      this.loadProducts();
    }

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Yard Sale Listings</h1>
              </Jumbotron>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Products on Sale in my Yard</h1>
                <h3>Day | Time | Address</h3>
              </Jumbotron>
              {this.state.products.length ? (
                <List>
                  {this.state.products.map(product => (
                    <ProductCard>
                    <ListItem key={product._id}>
                      <Link to={"/products/" + product._id}>
                        {product.imgURL}
                        <strong>
                          {product.category} : {product.title} sold by {product.seller}
                        </strong>
                      </Link>
                      {product.price}
                      {product.description}
                      {product.intCounter} People Interested
                    </ListItem>
                    </ProductCard>
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