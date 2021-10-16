const router = require('express').Router();
const User =  require("../model/User");
const Crypto = require('crypto-js');


router.put("/:id ", async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin ) {
         if(req.body.password) 
         {
            req.body.password = Crypto.AES.encrypt(
                req.body.password, 
                process.env.SECRET_KEY
            ).toString();
         }

         try {
            const user = await User.findByIdAndUpdate(req.params.id , {$set : req.body });
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You can update only your account ");
    }

    
});