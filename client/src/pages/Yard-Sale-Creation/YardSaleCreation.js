import React, { Component } from "react";
import styled from 'react-emotion';
import API from "../../utils/API";

const YardSaleCreationWrapper = styled('div')({
    margin: 20
})
const YardSaleCreationElement = styled('div')({
    margin: 15
})

class YardSaleCreation extends Component {
    state = {
        displayProducts: false,
        address: "Street Address City, State", 
        zipCode: 12345, 
        name: "Your Yard Sale's Name", 
        date: "2018-12-3101:00"
    }
    
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitYardSale = () => {
        let newSale = {
            name: this.state.name,
            address: this.state.address,
            zipCode: this.state.zipCode,
            date: new Date(this.state.date + ":00Z")
        }
        console.log(newSale)
        API.createYardSale(newSale)
            .then(function(res){console.log(res)})
            .catch(err => console.log(err))
    }

    render(){
        return(
            <YardSaleCreationWrapper>
                <h3>Enter Your Sale's Info Here</h3>
                {/* Address */}
                <YardSaleCreationElement>Address: <input type="text" name="address" value={this.state.address} onChange={this.handleInput}></input></YardSaleCreationElement>
                {/* Zip Code */}
                <YardSaleCreationElement>Zip Code: <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleInput}></input></YardSaleCreationElement>
                {/* Date of Sale */}
                <YardSaleCreationElement>Date of Sale: <input type="datetime-local" name="date" value={this.state.date}onChange={this.handleInput}></input></YardSaleCreationElement>
                {/* Name of Sale */}
                <YardSaleCreationElement>Name of Your Sale: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input></YardSaleCreationElement>

                <button onClick={this.submitYardSale}>Submit</button>
            </YardSaleCreationWrapper>  
        );
    }
}

export default YardSaleCreation;