const Solution = require('../models/Solution');

// Get all solutions
exports.getAllSolutions = async (req, res) => {
  try {
    const solutions = await Solution.find().sort({ createdAt: -1 });
    res.json(solutions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching solutions', error: error.message });
  }
};

// Get single solution by ID
exports.getSolutionById = async (req, res) => {
  try {
    const solution = await Solution.findById(req.params.id);
    if (!solution) {
      return res.status(404).json({ message: 'Solution not found' });
    }
    res.json(solution);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching solution', error: error.message });
  }
};

// Create new solution
exports.createSolution = async (req, res) => {
  try {
    const newSolution = new Solution(req.body);
    const savedSolution = await newSolution.save();
    res.status(201).json(savedSolution);
  } catch (error) {
    res.status(400).json({ message: 'Error creating solution', error: error.message });
  }
};

// Update solution
exports.updateSolution = async (req, res) => {
  try {
    const updatedSolution = await Solution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedSolution) {
      return res.status(404).json({ message: 'Solution not found' });
    }
    
    res.json(updatedSolution);
  } catch (error) {
    res.status(400).json({ message: 'Error updating solution', error: error.message });
  }
};

// Delete solution
exports.deleteSolution = async (req, res) => {
  try {
    const deletedSolution = await Solution.findByIdAndDelete(req.params.id);
    
    if (!deletedSolution) {
      return res.status(404).json({ message: 'Solution not found' });
    }
    
    res.json({ message: 'Solution deleted successfully', deletedSolution });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting solution', error: error.message });
  }
};
