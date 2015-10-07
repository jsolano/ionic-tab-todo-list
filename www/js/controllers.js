angular.module('starter.controllers', [])

.controller('TodoBizCtrl', function($scope, $localStorage) {
  $scope.todobiz = {
    task : ''
  };

  if ($localStorage.biztasks) {
    $scope.tasks = $localStorage.biztasks;
  } else {
    $scope.tasks = ['Biz Task 1', 'Biz Task 2', 'Biz Task 3'];
  }

  $scope.addTask = function() {
    if ($scope.todobiz.task) {

      $scope.tasks.push($scope.todobiz.task);

      $localStorage.biztasks = $scope.tasks;

      $scope.todobiz.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.biztasks = $scope.tasks;

  }

})

.controller('TodoHomeCtrl', function($scope, $localStorage) {
  $scope.todohome = {
    task : ''
  };

  if ($localStorage.hometasks) {
    $scope.tasks = $localStorage.hometasks;
  } else {
    $scope.tasks = ['Home Task 1', 'Home Task 2', 'Home Task 3'];
  }

  $scope.addTask = function() {
    if ($scope.todohome.task) {

      $scope.tasks.push($scope.todohome.task);

      $localStorage.hometasks = $scope.tasks;

      $scope.todohome.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.hometasks = $scope.tasks;

  }
})

.controller('TodoJobsCtrl', function($scope, $localStorage) {
  $scope.todojobs = {
    task : ''
  };

  if ($localStorage.jobstasks) {
    $scope.tasks = $localStorage.jobstasks;
  } else {
    $scope.tasks = ['Jobs Task 1', 'Jobs Task 2', 'Jobs Task 3'];
  }

  $scope.addTask = function() {
    if ($scope.todojobs.task) {

      $scope.tasks.push($scope.todojobs.task);

      $localStorage.jobstasks = $scope.tasks;

      $scope.todojobs.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.jobstasks = $scope.tasks;

  }
})

.controller('SettingsCtrl', function($scope, FriendService, $state) { 
  $scope.friendsCount = FriendService.all().length;

  $scope.showFriends = function() {
    $state.go('tab.friends');
  }
})

.controller('FriendsCtrl', function($scope, FriendService) { 

  $scope.friends = FriendService.all();

});
