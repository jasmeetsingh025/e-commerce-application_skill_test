import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
});

export default mongoose.model("Product", projectSchema);
