var studentAttendance = angular.module('studentAttendance', ['ui.router']);

//UI-ROUTER ADD
studentAttendance.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "AdminCtrl"
  });

  $stateProvider.state('sign-in', {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('admin', {
    url: "/admin",
    templateUrl: "partials/admin.html",
    controller: "AdminCtrl"
  });

  // FROM:
  // $stateProvider.state('courses.students', {
  // url: "/:courseId",
  // templateUrl: "partials/courses.students.html",
  // controller: 'StudentsCtrl'
  // });

});
