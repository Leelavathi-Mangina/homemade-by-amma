const cloudinary = require("../config/cloudinary");

function uploadImage(fileBuffer, folder = "homemade-by-amma/products") {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

async function deleteImage(publicId) {
  if (!publicId) {
    return;
  }

  await cloudinary.uploader.destroy(publicId);
}

module.exports = {
  uploadImage,
  deleteImage,
};