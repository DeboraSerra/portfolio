const conn = require('../connection/connection');
// const projects = require('../../data/script');

const Project = {
  createProject: async ({ description, module, name, link, src }) => {
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
    const [{ insertId }] = await conn.execute(query, [name, description, link, src]);
    return { id: insertId, description, name, module, link, src };
  },
  getAll: async () => {
    const [fundamentals] = await conn.execute('SELECT * FROM fundaments');
    const [frontEnd] = await conn.execute('SELECT * FROM front_end');
    const [backEnd] = await conn.execute('SELECT * FROM back_end');
    const [personal] = await conn.execute('SELECT * FROM personal');
    return { fundamentals, frontEnd, backEnd, personal };
  }
}

// const update = async (id, table, field, data) => {
//   const query = 'UPDATE ? SET ? = ? WHERE id = ?';
//   await conn.execute(query, [table, field, data, id]);
// }

// projects.forEach(async ({ name, module, link, description, src }) => {
//   await conn.execute('TRUNCATE TABLE fundaments');
//   await conn.execute('TRUNCATE TABLE front_end');
//   await conn.execute('TRUNCATE TABLE back_end');
//   await conn.execute('TRUNCATE TABLE personal');
//   createProject({ name, module, description, link, src });
// });

module.exports = Project;
