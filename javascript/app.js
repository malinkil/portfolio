var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/skills', {
            templateUrl: 'pages/skills.html',
            controller: 'aboutController'
        })
        .when('/project', {
            templateUrl: 'pages/project.html',
            controller: 'projectController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.directive('mySkill', function(){
    return {
        restrict: 'E',
        templateUrl: 'template/myskill.html',
        controller: function($scope){
            $scope.skills = [
                            {name:"Programming Language",value:"JavaEE, Perl, PHP, C++, Hibernate , Spring"},
                            {name:"Front-End Technology",value:"HTML 4/5, JavaScript, Javascript MVC, AJAX, CSS3, JQuery,Bootstrap, Angular, Ember , JSP"},
                            {name:"Web Services",value:"SOAP, Rest"},
                            {name:"Application/Web Servers",value:"Apache Tomcat , GlassFish"},
                            {name:"Databases",value:"SQL Server 2005/08/12, MySQL,PL/SQL, Oracle 11g, Oracle 12c"},
                            {name:"IDE Tools",value:"Eclipse, NetBeans, SQL Developer , Sqlyog"},
                            {name:"Unit Testing Tools",value:"Junit"},
                            {name:"Version Control",value:"CVS, GitHub,  SVN , GIT,Bitbucket"},
                            {name:"Operating Systems",value:"Windows, UNIX, LINUX"},
                            {name:"Build Tools",value:"Ant, Maven"},
                            {name:"Methodologies",value:"Agile, SDLC"},
                            {name:"SCP/SFTP client",value:"WinSCP"}
                            ];
        }
    }
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);


// create the controller and inject Angular's $scope
app.controller('mainController', ['$scope',function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am passionate in learning new technology with more than 2 years of experience in IT with both Front End and Backend Experience in technology such as Java, PHP, Perl, Angular JS, Ember JS. I am involved in Design, Development of User Interfaces for various Internet/Intranet applications, generated prototypes using Angular JS, java script, jQuery,Bootstrap, HTML5 and CSS3 for responsive and non-responsive websites.Extensive experience working in both AGILE/SCRUM and SDLC based development environment and participating in SCRUM sessions that includes Analysing, Designing, Coding, Testing, implementation & Production Support';

}]);

app.controller('aboutController', ['$scope',function ($scope) {
}]);

app.controller('projectController', ['$scope', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);
