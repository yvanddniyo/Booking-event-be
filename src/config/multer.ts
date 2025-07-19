import multer from "multer";
import path from "path";

const fileUpload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".jpeg" &&
            ext !== ".gif" &&
            ext !== ".tif" &&
            ext !== ".webp" &&
            ext !== ".bmp" &&
            ext !== ".tiff" &&
            ext !== ".svg"
        ) {
            return cb(new Error("Invalid file type") as any, false);
        }
        cb(null, true);
    },
});

export default fileUpload;