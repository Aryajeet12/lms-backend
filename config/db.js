import mongoose from "mongoose"
MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI){
    throw new Error("MONGO_URI not found");
}
const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI);
}

export default dbConnect