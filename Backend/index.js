import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './routes/BooksRoute.js';
import userRoute from './routes/UserRoute.js'
import cors from 'cors';
import contact from './routes/Contacts.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

const Url = process.env.MongoDBUrl;

async function connectDB() {
    try {
        await mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log('Error connecting to MongoDB:', e);
    }
}
connectDB();

// Register routes
app.use('/books', bookRoute);

app.use('/user', userRoute);

app.use('/contact', contact)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
