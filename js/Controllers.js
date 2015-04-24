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

    studentList = [];

    $scope.signIn = function(student) {
      student.here = true;
      studentList.push(student);
      console.log(studentList);
    };

    $scope.signOut = function(student) {
      student.here = false;
      studentList.splice(studentList.indexOf(student), 1);
      console.log(studentList);

    };
});

// =========== ADMIN CONTROL ==============

studentAttendance.controller('AdminCtrl', function AdminCtrl($scope) {
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

  studentList = [];

  $scope.addStudent = function(studentName) {
    student = { name: studentName, here: false };
    $scope.students.push(student);
    console.log(student);
  };

  $scope.deleteStudent = function(student) {
    $scope.students.splice(students.indexOf(student), 1);
  };

});
