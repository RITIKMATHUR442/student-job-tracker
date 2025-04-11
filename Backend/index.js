// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Job Schema
const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  dateOfApplication: Date,
  link: String,
});

const Job = mongoose.model('Job', jobSchema);

// Routes

// 1. Add Job
app.post('/api/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. Get All Jobs + Filter by Status or Date
app.get('/api/jobs', async (req, res) => {
  try {
    const { status, date } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (date) filter.dateOfApplication = new Date(date);

    const jobs = await Job.find(filter).sort({ dateOfApplication: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Update Job (Using PUT)
app.put('/api/jobs/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      overwrite: true,
    });
    if (!updatedJob) return res.status(404).json({ error: 'Job not found' });
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. Delete Job
app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
