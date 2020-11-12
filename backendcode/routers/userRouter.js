import express from 'express';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler';
import { data } from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.get('/send', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
}));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });
    if (user) {
        const havepassword = bcrypt.compareSync(password, user.password);
        if (havepassword) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
        } else {
            res.status(404).send({ message: 'password is incorrect' });
        }
    } else {
        res.status(401).send({ message: 'email address is incorrect' })
    }
}))

export default userRouter;  