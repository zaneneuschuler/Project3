import React from "react";
import styled from "react-emotion";

const Wrapper = styled('div')({
    margin: 10,
    boxShadow: "1px 2px 2px 0px grey",
    padding: 10
})

export const YardSaleListCard = ({ address, zipCode, date, name, link }) => {
    return (
        <Wrapper>
            <a href={"/products/" + link}>Click Here to View Products</a>
            <p>{address}</p>
            <p>{zipCode}</p>
            <p>{date}</p>
            <p>{name}</p>
        </Wrapper>
    )
}