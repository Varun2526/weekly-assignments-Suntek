import multer from "multer";

/**
 * Configured Multer instance for single file uploads.
 * - Storage: Memory (Buffer) — allows direct streaming to Cloudinary
 * - Max file size: 2MB — prevents RAM overflow from large uploads
 * - Allowed types: JPEG and PNG only — security validation
 */
export const upload = multer({
  // Store uploaded files in memory as Buffer objects
  // This avoids writing temp files to disk
  storage: multer.memoryStorage(),

  // Limit file size to 2MB to prevent memory exhaustion
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB in bytes
  },

  // Validate file type — only allow image formats
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);  // Accept the file
    } else {
      const err = new Error("Only JPG and PNG allowed");
      err.status = 400;
      cb(err, false);  // Reject the file with an error
    }
  },
});
