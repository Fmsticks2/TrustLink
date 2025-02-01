const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  try {
    const { name, description, ownerId } = req.body;
    const project = await Project.create({ name, description, ownerId });
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

exports.getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.name = name || project.name;
    project.description = description || project.description;
    await project.save();

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};
