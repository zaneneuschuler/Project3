import React, { Component } from "react";
import styled from 'react-emotion';
import { List, ListItem } from "../../components/List/index";

const YardSaleListingsWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
});

const ListingsWrapper = styled('div')({
    display: "flex",
    justifyContent: "space-around"
});

const IndividualListingsWrapper = styled('div')({
    display: "flex",
    boxShadow: "1px 2px 2px 0px grey",
    padding: 10
});

class YardSaleListings extends Component {


    render() {
        return (
            <div>
                <YardSaleListingsWrapper>
                    <h1>Listings</h1>
                </YardSaleListingsWrapper>
                <ListingsWrapper>
                    <IndividualListingsWrapper>
                        <List>
                            
                        </List>
                    </IndividualListingsWrapper>
                </ListingsWrapper>
            </div>
        );
    }
}

export default YardSaleListings;