// This is a higher-order function that wraps async route handlers to automatically catch errors and pass them to Express's error handling middleware.
const asyncHandler = function name(requestHandler){ // class doesnt haven circular parenthesis
// asyncHandler → must have next, because that’s how Express knows there’s an error.
    return (req, res, next)=>{ // returning an fuction
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>{
            next(err);
        })
    }
} 
export {asyncHandler};