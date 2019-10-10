const students = require('../dummy/students.js');

class StudentController {
    // Get all students
    static getAllStudents(req, res) {
        res.set('Content-Type', 'text/json')
          return res.status(200).json({
                data: students,
                message: "All the students yes",
          });
    }
    // Get a single student
    static getSingleStudent(req, res) {
           const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
           if (findStudent) {
               return res.status(200).json({
                    student: findStudent,
                    message: "A single student record",
               });
           }
           return res.status(404).json({
                 message: "Student record not found",
           });
    }
};
module.exports = StudentController;