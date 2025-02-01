const Milestone = require('../models/milestoneModel');

exports.createMilestone = async (req, res) => {
  try {
    const { projectId, description } = req.body;
    const milestone = await Milestone.create({ projectId, description });
    res.status(201).json({ message: 'Milestone created successfully', milestone });
  } catch (error) {
    res.status(500).json({ message: 'Error creating milestone', error });
  }
};

exports.getMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    const milestone = await Milestone.findByPk(id);
    if (!milestone) return res.status(404).json({ message: 'Milestone not found' });
    res.status(200).json(milestone);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching milestone', error });
  }
};

exports.completeMilestone = async (req, res) => {
  try {
    const { id } = req.params;
    const milestone = await Milestone.findByPk(id);
    if (!milestone) return res.status(404).json({ message: 'Milestone not found' });

    milestone.status = 'Completed';
    await milestone.save();
    res.status(200).json({ message: 'Milestone completed successfully', milestone });
  } catch (error) {
    res.status(500).json({ message: 'Error completing milestone', error });
  }
};