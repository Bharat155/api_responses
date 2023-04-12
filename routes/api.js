const express = require('express');
const ApiResponse = require('../model/api_model');

const apiRouter = express.Router();


// Define a route for creating a new ApiResponse document
apiRouter.post('/api', async (req, res) => {
  try {
    const apiResponse = new ApiResponse(req.body);
    await apiResponse.save();
    res.status(201).send(apiResponse);
  } catch (err) {
    res.status(400).send(err);
  }
});

apiRouter.get("/api", async (req, res) => {
    try {
      const apis = await ApiResponse.find();
  
      res.json(apis);
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


module.exports = apiRouter;