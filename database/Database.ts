import mongoose from 'mongoose';

import { Error } from 'mongoose';

const { MONGO_URI } = process.env;

const DbConnect = () => {
    // Connecting to the database
    mongoose
        .connect(MONGO_URI!)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error: Error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};

export default DbConnect;