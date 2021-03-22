import axios from 'axios';

const USER_API_BASE_URL = 'https://rentswag.herokuapp.com/users';



class ApiService {
        
     config= {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
          }
    }

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
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

    GetallOrders() {
        return axios.get(""+USER_API_BASE_URL+'/getallorder',this.config);
    }
    // deleteUser(userId) {
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    loginUser(user){
        return axios.post(""+USER_API_BASE_URL+'/authenticate',user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
     
    
}

export default new ApiService();