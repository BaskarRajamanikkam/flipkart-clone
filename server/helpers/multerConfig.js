const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

// Dynamic Cloudinary Storage
const getCloudinaryStorage = (folder) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder,
      allowed_formats: ["jpg", "jpeg", "png","webp"],
    },
  });
};

// Middleware to create Multer instance dynamically
const upload = (folder) => {
  const storage = getCloudinaryStorage(folder);
  return multer({ storage });
};

module.exports = upload;