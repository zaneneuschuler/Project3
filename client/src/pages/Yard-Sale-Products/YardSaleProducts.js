import React, { Component } from "react";
import styled from 'react-emotion';
import ProductCard from "../../components/ProductCard/ProductCard";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class YardSaleProducts extends Component {

    state = {
        products = [],
        title: "",
        seller: "",
        price: "",
        imgURL: "",
        description: ""
    };
    }



const YardSaleProductsWrapper = styled('div')({
    display: "flex",
    justifyContent: "center"
});

class YardSaleProducts extends Component {


    render() {
        return (
            <YardSaleProductsWrapper>
                <h1>Individual Yard Sale Products</h1>
            </YardSaleProductsWrapper>
        );
    }
}


export default YardSaleProducts;