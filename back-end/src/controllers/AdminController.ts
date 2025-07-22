import { Request, Response } from "express";
import Users from "../modals/userModal.js";
import { generatePassword } from "../utils/password.js";
import Tutorials from "../modals/tutorialModal.js";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const userList = await Users.find();
    res
      .status(200)
      .json({ message: "successfully fetched users", users: userList });
  } catch (error) {
    res.status(404).json({
      message: console.error(),
    });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, courses } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !Array.isArray(courses) ||
      courses.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const isExist = await Users.findOne({ email: email });
    if (isExist) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await generatePassword(password);
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
      courses,
    });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Add User Error:", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "email is required" });

    const deletedUser = await Users.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAllTutorials = async (req: Request, res: Response) => {
  try {
    const tutorialList = await Tutorials.find();
    res.status(200).json({
      message: "successfully fetched tutorials",
      tutorials: tutorialList,
    });
  } catch (error) {
    res.status(404).json({
      message: console.error(),
    });
  }
};

export const addTutorial = async (req: Request, res: Response) => {
  try {
    const { title, link } = req.body;
    if (!title || !link)
      return res.status(400).json({ message: "All fields are required" });

    const isExist = await Tutorials.findOne({ link: link });
    if (isExist)
      return res.status(400).json({ message: "Tutorial already exists" });

    const tutorial = await Tutorials.create({ title, link });
    res
      .status(201)
      .json({ message: "tutorial created successfully", tutorial });
  } catch (error) {
    console.error("Add User Error:", error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "all fields are required" });

    const hashedPassword = await generatePassword(password);
    const updatedUser = await Users.findOneAndUpdate(
      {
        email: email, //filter
      },
      { password: hashedPassword }, //updation
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Server error" });
  }
};
