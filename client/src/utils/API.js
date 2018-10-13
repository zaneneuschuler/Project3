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

    createYardSale: function(id, yardsale){
        return axios.post(`api/user/${id}`, yardsale)
    },

    login: function(loginData) {
      console.log ('login() is called...' + JSON.stringify(loginData))
        return axios.post("/auth/login", loginData)
    }
};