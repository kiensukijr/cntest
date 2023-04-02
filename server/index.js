import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import foodRoute from './routes/foods.js';
import userRoute from './routes/users.js';
import orderRoute from './routes/orders.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';

//CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(cors());

//ROUTES
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/foods', foodRoute);
app.use('/orders', orderRoute);
app.use('/reviews', reviewRoute);


//MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));

    // ADD DATA ONE TIME

})
.catch((error) => console.log(`${error} did not connect`));