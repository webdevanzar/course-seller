import { comparePassword } from "../utils/password.js";
import Users from "../modals/userModal.js";
import { Request, Response } from "express";
import { generateAccessToken } from "../utils/jwt.js";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Username/password are required" });
    }

    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        message: "user is not exist",
      });
    }

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Password is not valid",
      });
    }

    const accessToken = generateAccessToken({
      _id: user._id.toString(),
      name: user.name,
    });

    res
      .status(200)
      .cookie("token", accessToken, {
        httpOnly: true,
      })
      .json({ message: "logined successfully" });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
