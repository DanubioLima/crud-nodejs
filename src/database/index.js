const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Student = require('../models/Student');
const Course = require('../models/Courses');

const DbConnection = new Sequelize(dbConfig);

Student.init(DbConnection);
Course.init(DbConnection);

module.exports = DbConnection;

