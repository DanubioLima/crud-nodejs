const Course = require('../models/Courses');

module.exports = {
    async create(req, res) {
        try {
            const { id, name, load, description } = req.body;
            const course = await Course.create({ id, name, load, description })
            return res.json(course);
        } catch (error) {
            console.log('erro:', error)
        }

    }
}