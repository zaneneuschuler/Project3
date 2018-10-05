import axios from "axios";

export default {
    getAllYardSales: function(){
        return axios.get("/api/yardSales")
    }
}