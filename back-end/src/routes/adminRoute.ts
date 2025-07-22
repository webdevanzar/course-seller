import express from "express";
import {
  addTutorial,
  addUser,
  deleteUser,
  getAllTutorials,
  getAllUsers,
  resetPassword,
} from "../controllers/AdminController.js";
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/user", addUser);
router.delete("/user", deleteUser);
router.get("/tutorials", getAllTutorials);
router.post("/tutorial", addTutorial);
router.post("/resetpassword", resetPassword);

export default router;
