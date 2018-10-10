import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    },

    getYardSale: function(id){
        return axios.get(`/api/yardSales/${id}`)
    }
}