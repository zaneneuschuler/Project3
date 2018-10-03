import React, { Component } from "react";
import styled from 'react-emotion';

const YardSaleListingsWrapper = styled('div')({
    display: "flex",
    justifyContent: "center"
});

class YardSaleListings extends Component {


    render() {
        return (
            <YardSaleListingsWrapper>
                <h1>Listings</h1>
            </YardSaleListingsWrapper>
        );
    }
}

export default YardSaleListings;