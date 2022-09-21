const {pool} = require('../libs/postgres.pool')
const { models } = require('../db_sequelize/models/user.model')


class UserService {
  constructor() {
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create(data) {
    return data
  }

  async find() {
    const response= await models.User.findAll()
    return response
  }

  async findOne(id) {
    return { id }
  }

  async update(id, changes) {
    return {
      id,
      changes,
    }
  }

  async delete(id) {
    return { id }
  }
}

module.exports = UserService
