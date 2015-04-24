studentAttendance.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [
        { name: "Jane Farley" },
        { name: "Sally Forth" },
        { name: "River Fjord" },
        { name: "John Ford" },
        { name: "Ford Falcon" }
    ];
});

/*
courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
    $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
    $scope.addStudent = function() {
        $scope.course.students.push({ name: $scope.studentName });
        $scope.studentName = null;
    };
}); 
*/
