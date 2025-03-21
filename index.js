var app = angular.module("index", []);
        app.controller("indexController", function ($scope) {
            $scope.isDarkMode = localStorage.getItem("darkMode") === "true";
            $scope.logo_src = "logos/logo-no-background.png";

            $scope.toggleDarkMode = function () {
                $scope.isDarkMode = !$scope.isDarkMode;
                localStorage.setItem("darkMode", $scope.isDarkMode);

                if($scope.isDarkMode){
                    document.body.classList.add("body-dark");
                    document.querySelector("nav").classList.add("nav-dark");
                    document.querySelectorAll("button").forEach(button => {
                        button.classList.add("btn-dark");
                    });
                    $scope.logo_src = "logos/logo-no-background.png"; 
                    document.getElementById("brand_logo").classList.add("img");
                    document.getElementById("brand_logo").style.height = "50px";
                    document.querySelector(".img").style.filter = "grayscale(50%)";
                    document.querySelectorAll("li a").forEach(link => {
                        link.classList.add("links"); 
                    });
                    

                }
                else{
                    document.body.classList.remove("body-dark");
                    document.querySelector("nav").classList.remove("nav-dark");
                    document.querySelectorAll("button").forEach(button => {
                        button.classList.remove("btn-dark");
                    });
                    $scope.logo_src= document.getElementById("brand_logo");
                    $scope.logo_src = "logos/logo-no-background.png"; 
                    document.getElementById("brand_logo").style.height = "50px";
                    document.querySelector(".img").style.filter = "grayscale(0%)";

                    document.querySelectorAll("a").forEach(link => {
                        link.classList.remove("links"); 
                    });
                }
            };

            $scope.toggleHeart = function(){
                $scope.heartToggle = !$scope.heartToggle;

                localStorage.setItem("darkMode", $scope.heartToggle);

                if(heartToggle){
                    document.getElementById("heart_icon_div").classList.add("active");
                }
                else{
                    document.getElementById("heart_icon_div").classList.remove("active"); 
                }
            }
        });

        