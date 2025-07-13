const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { createTask, getTasks, updateTask, deleteTask } = require('../services/dynamoDB');

// Create a task
router.post('/', async (req, res) => {
  const task = { ...req.body, taskId: uuidv4() };
  const result = await createTask(task);
  if (result.success) {
    res.status(201).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  const result = await getTasks();
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

// Update a task
router.put('/:taskId', async (req, res) => {
  const result = await updateTask(req.params.taskId, req.body);
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

// Delete a task
router.delete('/:taskId', async (req, res) => {
  const result = await deleteTask(req.params.taskId);
  if (result.success) {
    res.status(204).send();
  } else {
    res.status(500).json({ error: result.error });
  }
});

module.exports = router;