const express = require('express');
const router = express.Router();

// Define routes for each page

// Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services');
});

module.exports = router;
