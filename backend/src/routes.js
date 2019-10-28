const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboarController = require('./controllers/DashboarController.js');
const BookingController = require('./controllers/BookingController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboarController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
