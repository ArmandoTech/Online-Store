const { Model, DataTypes, Sequelize } = require('sequelize')
const { sequelize } = require('../../libs/sequelize')

const USER_TABLE= 'users'

const UsersSchema= {
  id: {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  creationDate: {
    allowNull: false,
    field: 'creation_date',
    default_value: Sequelize.NOW,
    type: DataTypes.DATE,
  },
}

class User extends Model {

  static associate() {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

module.exports = {User, UsersSchema, USER_TABLE}
