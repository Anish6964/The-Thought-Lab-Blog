import mongoose from 'mongoose';

const url = 'mongodb+srv://anishthota96:EiUVM9a1Hacsek1y@anishcluster.ypiqagh.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(url); // Corrected this line
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;