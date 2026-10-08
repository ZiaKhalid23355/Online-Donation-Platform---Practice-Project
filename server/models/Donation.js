import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  value: Number
});

export default mongoose.model("Donation", donationSchema);