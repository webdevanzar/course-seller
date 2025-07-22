import mongoose, { Schema } from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tutorials = mongoose.model("Tutorials", tutorialSchema);
export default Tutorials;
