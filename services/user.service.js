const { Boom } = require('@hapi/boom')
const {pool} = require('../libs/postgres.pool')
const { models } = require('./../libs/sequelize')


class UserService {
  constructor() {
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create(data) {
    const user = models.User.create(data)
    return user
  }

  async find() {
    const response= await models.User.findAll()
    return response
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      Boom.notFound('User not found')
    }
    return user
  }

  async update(id, changes) {
    const user = this.findOne(id)
    const response = await user.update(changes)
    return response
  }

  async delete(id) {
    const user = this.findOne(id)
    await user.destroy()
    return { id }
  }
}

module.exports = UserService
