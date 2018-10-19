import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    },

    // Saves a new user to the database
    createNewUser: function(userData){
        console.log ('createNewUser() is called...' + JSON.stringify(userData))
        axios.post("/auth/signup", userData).then(function (response){
            return response.data;
        })
    },

    getYardSale: function(id){
        return axios.get(`/api/yardSales/${id}`)
    },

    getYardSaleByZip: function(zipCode){
        return axios.get(`/api/yardSales/zipCode/${zipCode}`)
    },

    createYardSale: function(id, yardsale){
        return axios.post(`api/user/${id}`, yardsale)
    },

    login: function(loginData) {
      console.log ('login() is called...')
        return axios.post("/auth/login", loginData)
    },

    getUser: function(userID) {
        return axios.get(`/api/user/${userID}`)
    },

    createNewProduct: function(newProduct){
        return axios.post('/api/listings', newProduct)
    },

    updateYardSale: function(yardsaleID, updatedDetails){
        return axios.put(`/api/yardSales/${yardsaleID}`, updatedDetails)
    },

    updateYardSaleEdit: function(yardsaleID, edit){
        return axios.put(`api/yardSales/${yardsaleID}`, edit)
    },

    updateListing: function(productID, edit){
        return axios.put(`api/listings/${productID}`, edit)
    },

    getProduct: function(productID){
        return axios.get(`/api/listings/${productID}`)
    },

    getYardSaleListings: function(id){
        return axios.get(`api/yardSales/${id}`)
    }
};