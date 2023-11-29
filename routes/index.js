const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Home route
router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.render('index', { questions });
});

// Create question route
router.post('/create', async (req, res) => {
    const { questionText, options } = req.body;
    const newQuestion = new Question({
      questionText,
      options: options.split(',').map((optionText) => ({ optionText })),
    });
    await newQuestion.save();
    res.redirect('/');
  });
  

// Vote route
router.post('/vote', async (req, res) => {
  const { questionId, optionIndex, voterName } = req.body;
  const question = await Question.findById(questionId);
  question.options[optionIndex].votes += 1;
  await question.save();
  res.redirect('/');
});

// Delete question route
router.post('/delete', async (req, res) => {
  const { questionId } = req.body;
  await Question.findByIdAndDelete(questionId);
  res.redirect('/');
});

  

module.exports = router;
