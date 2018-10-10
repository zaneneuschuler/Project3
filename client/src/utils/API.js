import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    },
    // Saves a new user to the database
    createNewUser: function(userData){
        console.log ('createNewUser() is called...' + JSON.stringify(userData))
        return axios.post("/auth/signup", userData)
    },
    getYardSale: function(id){
        return axios.get(`/api/yardSales/${id}`)
    },

    login: function(loginData) {
      console.log ('login() is called...' + JSON.stringify(loginData))
        return axios.post("/auth/login", loginData)
    }

};