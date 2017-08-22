var app = angular.module('popup', []);

app.controller('MainCtrl', function($scope) {

        $scope.test = [1,2];

        $scope.kaomojis = [
                {"kao" : "(╯°□°）╯︵ ┻━┻", "id" : "1","name" : "tableflip" },
                {"kao" : "┬─┬ノ( º _ ºノ)" , "id" : "2","name" : "tablefix" }
                //{"kao" : "¯\\_(ツ)_/¯" ,"id" : "3","name" : "shrug" }
        ];
});
