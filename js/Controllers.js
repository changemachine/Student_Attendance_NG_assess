studentAttendance.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [
        { name: "Jane Farley", here: false },
        { name: "Sally Forth", here: false },
        { name: "River Fjord", here: false },
        { name: "John Ford", here: false },
        { name: "Spanky Larsen", here: false },
        { name: "Gurgen Ratskeller", here: false },
        { name: "Minka Feldspar", here: false },
        { name: "Tran Falcon", here: false }
    ];

    $scope.studentList = [];
    // $scope.checkedIn = [];

    $scope.signIn = function(student) {
      student.here = true;
      studentList.push(student);
      console.log(studentList);
    };
    $scope.signOut = function(student) {
      student.here = false;
      studentList.splice(indexOf(student), 1);
      console.log(studentList);

    };
});

/*
========== FIELD TRIPS CONTROLLER ========
studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});

========== STUDENTS FACTORY ========
studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = { name: factory.studentName, permissionSlip: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index, 1);
  };
  return factory;
});


 ========== ALT: COURSE ROSTER APPROACH ========
courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
    $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
    $scope.addStudent = function() {
        $scope.course.students.push({ name: $scope.studentName });
        $scope.studentName = null;
    };
});
*/
