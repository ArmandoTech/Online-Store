const { User, UsersSchema } = require('./user.model')

const setupModels= sequelize => {
  User.init(UsersSchema, User.config(sequelize))
}

module.exports = {setupModels}
