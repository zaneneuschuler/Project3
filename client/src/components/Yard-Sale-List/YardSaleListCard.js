import React from "react";
import styled from "react-emotion";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./style.css"

const Wrapper = styled('div')({
    margin: 10,
    boxShadow: "1px 2px 2px 0px grey",
    padding: 10,
    color: "black"
})

export const YardSaleListCard = ({ address, zipCode, date, name, link }) => {
    return (
        <Wrapper>
            <Link className="link" to={"/products/" + link}>Click Here to View Products</Link>
            <p>{address}</p>
            <p>{zipCode}</p>
            <p>{date}</p>
            <p>{name}</p>
        </Wrapper>
    )
}