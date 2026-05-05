/**
 * @file cloudinaryUpload.js
 * @description Helper function to upload file buffers to Cloudinary.
 *              Wraps the Cloudinary upload stream in a Promise for async/await usage.
 * @requires cloudinary (configured instance)
 */

import cloudinary from "./cloudinary.js";

export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    // Create an upload stream to Cloudinary
    // upload_stream allows piping binary data directly without saving to disk
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog_users_b2" },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
    // Send the buffer to the stream and signal end of data
    stream.end(buffer);
  });
};
