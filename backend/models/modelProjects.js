const conn = require('./connection');
const projects = require('../data/script');

const createProject = async ({ description, module, name, link, src }) => {
  let query;
  switch (module) {
    case 'Fundaments':
      query = `INSERT INTO fundaments (name, description, repository, image)
      VALUES (?, ?, ?, ?)`;
      break;
    case 'Personal project':
      query = `INSERT INTO personal (name, description, repository, image)
      VALUES (?, ?, ?, ?)`;
      break;
    case 'Front-end':
      query = `INSERT INTO front_end (name, description, repository, image)
      VALUES (?, ?, ?, ?)`;
      break;
    case 'Back-end':
      query = `INSERT INTO back_end (name, description, repository, image)
      VALUES (?, ?, ?, ?)`;
      break;
    default: null;
  }

  await conn.execute(query, [name, description, link, src]);

}

const update = async (id, table, field, data) => {
  const query = 'UPDATE ? SET ? = ? WHERE id = ?';
  await conn.execute(query, [table, field, data, id]);
}

projects.forEach(({ name, module, link, description, src }) => {
  createProject({ name, module, description, link, src });
});
