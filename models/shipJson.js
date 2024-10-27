const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../db.json');

const readData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    return [];
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erro ao escrever no arquivo JSON:', error);
  }
};

const getNaves = () => readData();

const addNave = (nave) => {
  const naves = readData();
  const id = naves.length ? naves[naves.length - 1].id + 1 : 1;
  const novaNave = { id, ...nave };
  naves.push(novaNave);
  writeData(naves);
  return novaNave;
};

const deleteNave = (id) => {
  const naves = readData();
  const index = naves.findIndex((n) => n.id === id);
  if (index !== -1) {
    const [naveDeletada] = naves.splice(index, 1);
    writeData(naves);
    return naveDeletada;
  }
  return null;
};

module.exports = { getNaves, addNave, deleteNave };
