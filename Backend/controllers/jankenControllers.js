const Result = require('../model/jankenModel'); 
const mongoose = require('mongoose');

const createResult = async (req, res) => {
    try {
        const { result } = req.body; 
        const newResult = await Result.create({ result });

        // Send a success response
        res.status(201).json({ message: 'Result created successfully', data: newResult });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Error creating result', error: error.message });
    }
};

module.exports = { createResult };