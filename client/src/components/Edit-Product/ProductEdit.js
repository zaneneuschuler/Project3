import React, { Component } from "react";
import styled from 'react-emotion';


const EditProductCard = ({ 
    handleInput, 
    id, 
    handleClick, 
    editProductName, 
    editImageUrl, 
    editPrice, 
    editQuantity,
    editCategory,
    editDescription
    }) => {
    return (
        <div>
            <div>Product Name: <input type="text" name="editProductName" value={editProductName} onChange={() => handleInput}></input></div>

            <div>Image URL: <input type="text" name="editImageUrl" value={editImageUrl} onChange={() => handleInput}></input></div>

            <div>Price: <input type="text" name="editPrice" value={editPrice} onChange={() => handleInput}></input></div>

            <div>Quantity: <input type="text" name="editQuantity" value={editQuantity} onChange={() => handleInput}></input></div>

            <div>Category: <input type="text" name="editCategory" value={editCategory} onChange={() => handleInput}></input></div>   

            <div>Description: <textarea name="editDescription" value={editDescription} onChange={() => handleInput}></textarea></div>

            <div><button onClick={() => handleClick(id)}>Save</button></div>
        </div>
    )
}

export default EditProductCard;