import axios from 'axios';

const USER_API_BASE_URL = 'https://rentswag.herokuapp.com/users';



class ApiService {
        
     config= {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
          }
    }

    fetchUsers(username) {
        return axios.get(USER_API_BASE_URL+ '/fetchbyusername/' +username);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL+'/register', user);
    }
    saveProducts(products) {
        return axios.post(""+USER_API_BASE_URL+'/addproducts', products,this.config);
    }

    async GetallOrders() {
        return axios.get(""+USER_API_BASE_URL+'/getallorder',this.config);
    }

    loginUser(user){
        return axios.post(""+USER_API_BASE_URL+'/authenticate',user);
    }

    editUser(user) {
        return axios.post("https://rentswag.herokuapp.com/users/updateDetails",user);
    }
     
   async updatestatus(id,status) {
        return axios.get("https:rentswag.herokuapp.com/users/changestatus/"+id+"/"+status,this.config);
    }

    forgetpassword(email) {
        return axios.post("https:rentswag.herokuapp.com/users/forgot_password/"+email);
    }

    resetpassword(token,password) {
        return axios.post("https:rentswag.herokuapp.com/users/reset_password/"+token+"/"+password);
    }
    
}

export default new ApiService();