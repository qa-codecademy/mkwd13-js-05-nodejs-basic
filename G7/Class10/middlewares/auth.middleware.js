import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)

    if (!token) {
        return res.status(403).send({ message: "A token is required to access this route" })
    };

    try {
        // THE SAME SECRET KEY THAT WAS USED FOR THE TOKENS CREATIONS
        const payload = jwt.verify(token, "access_token_secret");
        console.log(payload);

        next();

    } catch (error) {
        return res.status(401).send({ message: "Invalid token" })
    }
}