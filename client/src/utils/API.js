import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    },

    //post method to insert new user
    createNewUser: function(userData){
        return axios.post("/api/user", userData)
    }
}