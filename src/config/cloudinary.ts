
import dotenv from "dotenv";
import { Response } from "express";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloud = async (file: Express.Multer.File, res?: Response): Promise<string> => {
    try {
        const uploadResult = await cloudinary.uploader.upload(file.path, {
            folder: "booking-event",
            use_filename: true,
        });
        return uploadResult.secure_url; // Return just the URL string
    } catch (error) {
        if (res) {
            res.status(500).send(error);
        }
        throw error; // Re-throw the error for proper handling
    }
};