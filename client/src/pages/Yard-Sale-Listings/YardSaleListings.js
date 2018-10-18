import React, { Component } from "react";
import styled from 'react-emotion';
import { YardSaleListCard } from "../../components/Yard-Sale-List/index";
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
    flex: 1,
    flexWrap: "wrap",
    boxShadow: "1px 2px 2px 0px grey",
    padding: 10
});

class YardSaleListings extends Component {

    state = {
        yardSales: [],
        searchZip: ""
    }

    // componentDidMount(){
    //     this.loadYardSaleListings();
    // }

    // loadYardSaleListings = () => {
    //     API.getAllYardSales()
    //     .then(
    //         res => this.setState({ yardSales: res.data })
    //     )
    //     .catch(err => console.log(err))
    // }

    searchByZip = (zip) => {
        API.getYardSaleByZip(zip)
            .then(res => this.setState({ yardSales: res.data }))
            .catch(err => console.log(err))
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <input type="text" name="searchZip" value={this.state.searchZip} onChange={this.handleInput}></input>
                <button onClick={() => this.searchByZip(this.state.searchZip)}>Search By Zip Code</button>
                <YardSaleListingsWrapper>
                    <h1>Listings</h1>
                </YardSaleListingsWrapper>
                <ListingsWrapper>
                    <IndividualListingsWrapper>
                        {this.state.yardSales.length ? (
                            this.state.yardSales.map(yardSale => {
                                return (
                                    <YardSaleListCard key={yardSale._id}
                                        link = {yardSale._id}
                                        address = {yardSale.address}
                                        zipCode = {yardSale.zipCode}
                                        date = {yardSale.name}
                                        name = {yardSale.date}
                                    />
                                );
                            })

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