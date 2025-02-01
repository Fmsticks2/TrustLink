const Dispute = require('../models/disputeModel');

exports.createDispute = async (req, res) => {
  try {
    const { projectId, reason } = req.body;
    const dispute = await Dispute.create({ projectId, reason });
    res.status(201).json({ message: 'Dispute created successfully', dispute });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dispute', error });
  }
};

exports.getDispute = async (req, res) => {
  try {
    const { id } = req.params;
    const dispute = await Dispute.findByPk(id);
    if (!dispute) return res.status(404).json({ message: 'Dispute not found' });
    res.status(200).json(dispute);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dispute', error });
  }
};

exports.resolveDispute = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const dispute = await Dispute.findByPk(id);
    if (!dispute) return res.status(404).json({ message: 'Dispute not found' });

    dispute.status = status;
    await dispute.save();
    res.status(200).json({ message: 'Dispute resolved successfully', dispute });
  } catch (error) {
    res.status(500).json({ message: 'Error resolving dispute', error });
  }
};