const express = require('express');
const router = express.Router();
const solutionController = require('../controllers/solutionController');

// GET all solutions
router.get('/', solutionController.getAllSolutions);

// GET single solution by ID
router.get('/:id', solutionController.getSolutionById);

// POST new solution
router.post('/', solutionController.createSolution);

// PUT update solution
router.put('/:id', solutionController.updateSolution);

// DELETE solution
router.delete('/:id', solutionController.deleteSolution);

module.exports = router;
