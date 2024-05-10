const mongoose = require('mongoose');
const fs = require('fs');

const connectDB = () => {
  const uri = 'mongodb://localhost:27017/my_database';
  return mongoose.connect(uri);
};

connectDB()
  .then((db) => {
    console.log('Connected to MongoDB');

    // Retrieve binary image data from MongoDB
    const collection_name = 'my_collection';
    const image_data = db.collection(collection_name).findOne({ _id: ZmF2aWNvbi0zMngzMi5wbmc}).toArray((err, doc) => {
      if (err) {
        console.error(err);
      } else {
        // Convert binary image data to a Buffer
        const buffer = new Buffer(doc.imageData);
        fs.writeFile('my_image.jpg', buffer, 'binary', (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Successfully wrote binary image data to file');
          }
        });
      }
      db.close();
    });
  })
  .catch(console.error)

