import cloudinary from './cloudinary';
import streamifier from 'streamifier';

export async function uploadToCloud(file: Express.Multer.File): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'profile_pictures' },
      (error, result) => {
        if (error || !result) return reject(error || new Error('No result'));
        resolve({ url: result.secure_url });
      }
    );
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
}
