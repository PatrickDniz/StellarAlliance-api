const { getNaves, addNave, deleteNave } = require('../models/shipJson');

exports.getAllNaves = (req, res) => {
  const naves = getNaves();
  res.json(naves);
};

exports.createNave = (req, res) => {
  const novaNave = addNave(req.body);
  res.status(201).json(novaNave);
};

exports.deleteNaveById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const naveDeletada = deleteNave(id);
  if (naveDeletada) {
    res.json({ message: 'Nave deletada com sucesso', naveDeletada });
  } else {
    res.status(404).json({ message: 'Nave não encontrada' });
  }
};
