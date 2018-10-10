import React, { Component } from "react";
import styled from 'react-emotion';
import API from "../../utils/API";

const Wrapper = styled('div')({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
})

const Wrapper2 = styled('div')({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "30%"
})

class YardSaleCreation extends Component {
    state = {
        displayProducts: false
    }
    
    submitYardSale = (event) => {
        const { address, zipCode, yardSaleName, date } = event.target;
        let newSale = {
            yardSaleName,
            address,
            zipCode,
            date
        }
        API.createYardSale(newSale)
            .then(function(res){console.log("HI")})
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Wrapper>
                <Wrapper2>
                    Address: <input type="text" name="address" placeholder="Street Address City, State"></input>
                    Zip Code: <input type="text" name="zipCode" placeholder="Zip Code"></input>
                    Date of Sale: <input type="datetime-local" name="date"></input>
                    Name of Your Sale: <input type="text" name="yardSaleName" placeholder="My Awesome Sale"></input>
                    <button onClick={() => this.submitYardSale}>Submit</button>
                </Wrapper2>
            </Wrapper>
        );
    }
}

export default YardSaleCreation;