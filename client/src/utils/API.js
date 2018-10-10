import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    },
    // Saves a new user to the database
    createNewUser: function(userData){
        console.log ('new user...' + JSON.stringify(userData))
        return axios.post("/api/user", userData)
    },
    getYardSale: function(id){
        return axios.get(`/api/yardSales/${id}`)
    }

};