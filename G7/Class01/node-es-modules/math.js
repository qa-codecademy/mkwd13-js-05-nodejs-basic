function add(a ,b){
    return a + b
};

function substract(a,b){
    return a - b
};

const multiply = (a, b) => a * b;

/**
 * module.exports = {} // commonjs syntax
 */


// ES MODULE SYNTAX

// DEFAULT EXPORT 
// NOTE: We write it at the end of the file
export default {
    add,
    substract,
    multiply
}