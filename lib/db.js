'use strict'

const Sequelize = require('sequelize')
let sequelize = null //singleton

module.exports = function setupDatabase(config){
  if (!sequelize){
    sequelize = new Sequelize(config)
  }
  return sequelize
}
