const express = require("express");
const userRoutes = express.Router();

const AsyncHandler = require("express-async-handler");

userRoutes.post('/login', AsyncHandler(
    async(req, res)=>{


}
)
)


