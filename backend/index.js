import express from "express"
import dotenv from "dotenv"
import contactRoutes from './routes/contactRoutes.js'
import mongoose, { connect } from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', contactRoutes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})


try {
     const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected...",  connect.connection.host, connect.connection.name);
} catch (error) {
    console.log("DB connection failed....");
    console.log(error);
}


   