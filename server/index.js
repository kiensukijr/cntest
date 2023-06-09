import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import foodRoute from './routes/foods.js';
import userRoute from './routes/users.js';
import orderRoute from './routes/orders.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import reservationRoute from './routes/reservations.js';

//CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(cors({ origin: "*" }));

//ROUTES
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/foods', foodRoute);
app.use('/orders', orderRoute);
app.use('/reviews', reviewRoute);
app.use('/reservations', reservationRoute);

//CONNECT DB
const PORT = process.env.PORT || 6001;
const dbName = 'test';
let db;
 
export const connectDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    try {
        await client.connect();
        app.listen(PORT, () => console.log(`server port: ${PORT}`));
        db = client.db(dbName);
    } catch (err) {
        console.log(err);
    }
}
 
export const getDb = () => {
    return db;
}
 
connectDb();