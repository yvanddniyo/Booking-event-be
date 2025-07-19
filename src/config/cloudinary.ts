
import dotenv from "dotenv";
import { Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
export const uploadToCloud = async (file: Express.Multer.File, res?: Response) => {
    try {
        const univeUploads = await cloudinary.uploader.upload(file.path, {
            folder: "booking-event",
            use_filename: true,
        });
        return univeUploads;
    } catch (error) {
        return res ? res.status(500).send(error) : error;
    }
};