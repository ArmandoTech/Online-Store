const boom = require('@hapi/boom')
const {pool} = require('../libs/postgres.pool')

class CategoryService {

  constructor(){
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }
  async create(data) {
    return data
  }

  async find() {
    const response = await this.pool.query('SELECT * FROM categories')
    return response.rows
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

module.exports = CategoryService
