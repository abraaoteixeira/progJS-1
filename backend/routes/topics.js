const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const topic = new Topic({
    title: req.body.title,
    description: req.body.description,
    visualizations: req.body.visualizations,
  });

  try {
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/export', (req, res) => {
  const { diagram, explanation } = req.body;
  // Implement functionality to export diagram and explanation as PDF or image
  res.json({ message: 'Export successful' });
});

module.exports = router;
