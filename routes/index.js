const express = require('express');

const router = express.Router();
const StudentController = require('../controllers/studentsController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', (req, res) => {
//   res.send('Hello World');
// });

router.get('/', StudentController.getAllStudents);


router.get('/:id', StudentController.getSingleStudent);


module.exports = router;
