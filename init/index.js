const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

const init = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66650b34f71151f0c7125e4d",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

init();
