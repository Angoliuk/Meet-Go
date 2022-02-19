import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";
import UserModel from "../Models/UserModel.js";
import { SECRET } from "../config.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const payload = {
    id,
  };

  return jwt.sign(payload, SECRET, { expiresIn: "24h" });
};

class AuthController {
  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "error", errors });
      }
      const { email, password, firstname, lastname } = req.body;
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "user already exists" });
      }
      const hashPassword = bcryptjs.hashSync(password, 8);
      const user = new UserModel({
        email,
        password: hashPassword,
        firstname,
        lastname,
      });
      const newUser = await user.save();
      return res.json(newUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "login error" });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "can`t find user" });
      }
      const passwordCheck = bcryptjs.compareSync(password, user.password);
      if (!passwordCheck) {
        return res.status(400).json({ message: "wrong password" });
      }
      const token = generateToken(user._id);
      console.log(user);
      return res.json({ ...user._doc, token: token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "login error" + e.message });
    }
  }
}

export default new AuthController();
