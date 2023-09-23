const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const multer = require('multer');
require('dotenv').config();
const request = require('request-promise');
const fs = require('fs');
const { Puzzle } = require('./models');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static('uploads'));


const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.options('*', cors(corsOptions));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/upload-images', async (req, res) => {
  try {
    const { imageUrls } = req.body;

    if (!imageUrls || !Array.isArray(imageUrls)) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const uploadDirectory = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory);
    }

    const savedImagePaths = [];

    for (const imageUrl of imageUrls) {
      const imageFileName = path.basename(imageUrl);
      const imagePath = path.join(uploadDirectory, imageFileName);

      await request(imageUrl).pipe(fs.createWriteStream(imagePath));
      savedImagePaths.push(imagePath);
    }

    res.json({ message: 'Images downloaded and saved successfully', savedImagePaths });
  } catch (error) {
    console.error('Error downloading and saving images:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

app.post('/push-images-to-db', async (req, res) => {
  try {
    const { images } = req.body;

    if (!images || !Array.isArray(images)) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const imagesToInsert = [];

    for (const image of images) {
      const imageMetadata = {
        theme: image.theme,
        image: image.imageUrl,
      };
      imagesToInsert.push(imageMetadata);
    }

    await Puzzle.bulkCreate(imagesToInsert);

    res.json({ message: 'Images inserted into the database successfully' });
  } catch (error) {
    console.error('Error inserting images into the database:', error);
    res.status(500).json({ error: 'Failed to insert images into the database', errorMessage: error.message });
  }
});

app.get('/get-images-by-theme', async (req, res) => {
  try {
    const { theme } = req.query;

    if (!theme) {
      return res.status(400).json({ message: 'Theme parameter is required' });
    }
    const images = await Puzzle.findAll({
      attributes: ['image'],
      where: { theme: theme },
    });

    const imageFileNames = images.map((image) => image.image);

    res.json({ images: imageFileNames });
  } catch (error) {
    console.error('Error fetching images by theme:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});





// app.get('/get-random-images-by-theme', async (req, res) => {
//   try {
//     const { theme } = req.query;

//     if (!theme) {
//       return res.status(400).json({ message: 'Theme parameter is required' });
//     }

//     // Query your database to get image file names based on the theme
//     const images = await Puzzle.findAll({
//       attributes: ['image'], // Select only the 'image' field
//       where: { theme: theme },
//     });

//     // Extract the image file names from the query result
//     const imageFileNames = images.map((image) => image.image);

//     res.json({ images: imageFileNames });
//   } catch (error) {
//     console.error('Error fetching images by theme:', error);
//     res.status(500).json({ message: 'Internal server error', error });
//   }
// });



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error('Error:', err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

