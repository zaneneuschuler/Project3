import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Products extends Component {

    state = {
        products = [],
        title: "",
        seller: "",
        price: "",
        imgURL: "",
        description: ""
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
              </Jumbotron>
              {this.state.products.length ? (
                <List>
                  {this.state.products.map(product => (
                    <ProductCard>
                    <ListItem key={product._id}>
                      <Link to={"/products/" + product._id}>
                        <strong>
                          {product.title} sold by {product.seller}
                        </strong>
                      </Link>
                      {product.price}
                      {product.imgURL}
                      {product.description}
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