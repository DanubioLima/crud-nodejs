const { Router } = require('express');
const routes = Router();
const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');


routes.get('/', (req, res) => {
    res.send('<h2>Welcome to Project School</h2>');
})

routes.put('/students', StudentController.update)
routes.get('/students', StudentController.index)
routes.delete('/students', StudentController.destroy)
routes.post('/students', StudentController.create)

routes.post('/courses', CourseController.create)

module.exports = routes;