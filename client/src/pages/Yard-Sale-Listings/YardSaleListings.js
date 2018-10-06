import React, { Component } from "react";
import styled from 'react-emotion';
import { List, ListItem } from "../../Components/Yard-Sale-List/index";
import API from "../../utils/API";

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

    state = {
        yardSales: []
    }

    componentDidMount(){
        this.loadYardSaleListings();
    }

    loadYardSaleListings = () => {
        API.getAllYardSales()
        .then(
            res => this.setState({ yardSales: res.data })
        )
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <YardSaleListingsWrapper>
                    <h1>Listings</h1>
                </YardSaleListingsWrapper>
                <ListingsWrapper>
                    <IndividualListingsWrapper>
                        {this.state.yardSales.length ? (
                            <List>
                                {this.state.yardSales.map(yardSale => {
                                return (
                                    <ListItem key={yardSale._id}>
                                        <a href={"/books/" + yardSale._id}>
                                            <strong>
                                            {/* {yardSale.title} by {yardSale.author} */}
                                            </strong>
                                        </a>
                                    </ListItem>
                                );
                                })}
                            </List>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
                    </IndividualListingsWrapper>
                </ListingsWrapper>
            </div>
        );
    }
}

export default YardSaleListings;