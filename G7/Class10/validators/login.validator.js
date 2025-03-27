import joi from "joi";

const loginRequestBodyValidator = joi.object({
    // if typeof email === "string" && isEmail, isRequired
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default loginRequestBodyValidator