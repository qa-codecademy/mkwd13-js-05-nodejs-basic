import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {userMongoModel} from "../schemas/user.schema.js";
import loginRequestBodyValidator from "../validators/login.validator.js";


const authRouter = Router();

authRouter.post('/register', async (req, res) => {
    const body = req.body;

    if(!body.email.trim() || !body.password.trim()){
        // 400 => bad request
        return res.status(400).send({message: "Email or password is missing."})
    };

    if(!body.email.includes("@")){
        return res.status(400).send({message: "Email is not valid"});
    };

    if(body.email.length <= 4 || body.password.length <= 4){
        return res.status(400).send({message: "Password or email is short."})
    };

    const user = await userMongoModel.findOne({ email: body.email });

    // we have user with that email
    if(user){
        return res.status(400).send({message: "User with that email is existing"})
    };

    const hashedPassword = await bcrypt.hash(body.password, 10);

    
    const newUser = {
        email: body.email,
        password: hashedPassword
    };

    try {
        const userDocument = new userMongoModel(newUser);
        await userDocument.save()
        res.status(201).send({message: "Registered."});
    } catch (error) {
        console.error(error)
    }
});

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        await loginRequestBodyValidator.validateAsync({email, password})
    } catch (error) {
        console.log(error.message)
        return res.status(400).send({message: error.message})
    }

                                       //{ email: email }
    const user = await userMongoModel.findOne({ email }) // same as {email: email} since the key and value share same name

    // findOne will return null if there is not match
    if(!user){
        return res.status(404).send({message: "User with that email not found."})
    };

    // password => john12345
    // hashedPassword => $2b$10$DPz7bsNSdXBhHiSxxyBHReHA5cv0cxTLTYSjaZ2lb02BpHI88.Ore
    // john12345 === $2b$10$DPz7bsNSdXBhHiSxxyBHReHA5cv0cxTLTYSjaZ2lb02BpHI88.Ore => FALSE

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(401).send({message: "Invalid password"})
    }


    const accessToken = jwt.sign(
        {email: user.email},
        "access_token_secret", // note: you should keep this value SECRET
        {
            // expiresIn: "15s"
            expiresIn: '1h'
        }
    )

    res.send({message: "Logged in", token: accessToken});
});


export default authRouter