import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}recipe_db`);
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Error in connecting database", error);
    process.exit(1);
  }
};

export default connectToDb;
