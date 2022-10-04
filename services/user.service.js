const { Boom } = require('@hapi/boom');
const { User } = require('../db_sequelize/models/user.model.js');
const { pool } = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    const user = await User.create(data);
    return user;
  }

  async find() {
    const response = await User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      Boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
