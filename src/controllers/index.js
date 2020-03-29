const { getConnection } = require('../database');
const { v4 } = require('uuid');

exports.getTasks = (req, res) => {
  let tasks = getConnection().get('tasks').value();

  res.json(tasks);
}

exports.getTaskById = (req, res) => {
  let id = req.params.id
  let task = getConnection().get('tasks').find({ id }).value();

  res.json(task)
}

exports.setTask = (req, res) => {
  let newTask = {
    id: v4(),
    name: req.body.name,
    description: req.body.description
  }

  getConnection().get('tasks').push(newTask).write();

  res.json(newTask)
}

exports.editTask = async (req, res) => {
  let id = req.params.id
  let updated = await getConnection().get('tasks').find({ id })
    .assign(req.body)
    .write()
  
  res.json(updated)
}

exports.removeTask = (req, res) => {
  let id = req.params.id
  let deleted = getConnection().get('tasks').remove({ id }).write()

  res.json(deleted)
}
