// the class name should always be the file name
class ApiResponse{ // class doesnt haven circular parenthesis
    constructor(statusCode, data, message = "Success"){
        //  here we dont need to call super because its not extending to an build in class
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
        this.success = statusCode < 400 //Client error responses
    }
};

export {ApiResponse};