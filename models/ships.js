let naves = [];
let nextId = 1;

const getNaves = () => naves;

const addNave = (nave) => {
  nave.id = nextId++;
  naves.push(nave);
  return nave;
};

const deleteNave = (id) => {
  const index = naves.findIndex(n => n.id === id);
  if (index !== -1) {
    return naves.splice(index, 1)[0];
  }
  return null;
};

module.exports = { getNaves, addNave, deleteNave };
