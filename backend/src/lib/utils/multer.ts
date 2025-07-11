import multer from 'multer';

export const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (['image/jpeg','image/png'].includes(file.mimetype)) cb(null, true);
        else cb(new Error('Invalid file type'));
    }
});
