import Donation from "./models/Donation.js"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Donation from "./models/Donation.js";

const app = express();

app.use(cors());
//exp
app.use(express.json());
//expp
mongoose.connect("mongodb://127.0.0.1:27017/odpdb")
  .then(() => console.log("MongoDB is now connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Name of the server is port 5000");
});

app.post("/api/donate", async (req, res) => {
  const { name, amount } = req.body;

  let existingDonation = await Donation.findOne({ name });

  if (existingDonation) {
    existingDonation.value += amount;
    await existingDonation.save();
    res.json(existingDonation);
  } else {
    const newDonation = new Donation({
      name,
      value: amount
    });

    await newDonation.save();
    res.json(newDonation);
  }
});

app.get("/api/donations", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});



