import { env } from '@lib/config/envConfig';
import mongoose from 'mongoose';

// Function to connect to MongoDB
export const connectToDatabase = async (): Promise<void> => {
    try {
        // Replace with your MongoDB connection string
        const mongoURI = env.MONGODB_URI;

        // Connecting to MongoDB
        await mongoose.connect(mongoURI);

        // Log success message
        logging.info('🟢 Successfully connected to the MongoDB database')
    } catch (error) {
        // Log error message if connection fails
        logging.error('🔴 Error connecting to the MongoDB database:', error);
        process.exit(1); // Exit the process with failure
    }
};
