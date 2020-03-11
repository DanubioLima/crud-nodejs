const Student = require('../models/Student');

module.exports = {
    async index(req, res) {
        const students = await Student.findAll();
        return res.json(students);
    },

    async create(req, res) {
        const { name, email, password } = req.body
        let user = await Student.findOne({
            where: {
                email: email
            }
        })
        if(user){
            return res.json({message: "User existing"})
        }else{
            const student = await Student.create({ name, email, password })
            return res.json(student)
        }
        
    },

    async destroy(req, res) {
        const { email } = req.body
        const UserDeleted = await Student.destroy({
            where: {
                email: email
            }
        })
        return res.json({ message: 'User deleted' })
    },

    async update(req, res) {
        const { nameUp, emailUp, passwordUp, name, email, password } = req.body
        const UserUpdate = await Student.update({
            name: nameUp,
            email: emailUp,
            password: passwordUp
        }, {
            where:{
                name,
                email,
                password
            }
        })
        return res.json(UserUpdate)
    }
}