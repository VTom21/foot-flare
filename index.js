var app = angular.module("index", []);
app.controller("indexController", function ($scope) {
    $scope.isDarkMode = localStorage.getItem("darkMode") === "true";
    $scope.logo_src = "logos/logo-no-background.png";

    $scope.toggleDarkMode = function () {
        $scope.isDarkMode = !$scope.isDarkMode;
        localStorage.setItem("darkMode", $scope.isDarkMode);

        if ($scope.isDarkMode) {
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
        else {
            document.body.classList.remove("body-dark");
            document.querySelector("nav").classList.remove("nav-dark");
            document.querySelectorAll("button").forEach(button => {
                button.classList.remove("btn-dark");
            });
            $scope.logo_src = document.getElementById("brand_logo");
            $scope.logo_src = "logos/logo-no-background.png";
            document.getElementById("brand_logo").style.height = "50px";
            document.querySelector(".img").style.filter = "grayscale(0%)";

            document.querySelectorAll("a").forEach(link => {
                link.classList.remove("links");
            });
        }
    };

    $scope.toggleHeart = function () {
        $scope.heartToggle = !$scope.heartToggle;

        localStorage.setItem("darkMode", $scope.heartToggle);

        if (heartToggle) {
            document.getElementById("heart_icon_div").classList.add("active");
        }
        else {
            document.getElementById("heart_icon_div").classList.remove("active");
        }
    }
});


// Function to toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-options");
    if (!dropdown) {
        console.error("Dropdown options not found!");
        return;
    }
    // Toggle display using class
    dropdown.classList.toggle("show");
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Adding the 'loader-hidden' class to fade the loader out
    loader.classList.add("loader-hidden");

    // Once the transition ends, remove the loader from the DOM
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader); // Correctly passing the element reference
    });

    // Set default flag when the page loads
    updateFlag("English");
});

// Function to select a language
function selectLanguage(element) {
    if (!element) return;

    const selectedText = element.innerText;
    const selectedValue = element.getAttribute("data-value");

    const dropdownSelected = document.querySelector(".dropdown-selected");
    if (dropdownSelected) {
        dropdownSelected.innerHTML = `${selectedText} <span class="arrow">▼</span>`;
    }

    // Hide dropdown
    document.getElementById("dropdown-options").classList.remove("show");

    updateFlag(selectedText);
    changeLanguage(selectedValue);
}

// Function to update the flag icon based on selected language
function updateFlag(language) {
    const flagIcon = document.getElementById("flag-icon");
    const flags = {
        "English": "US",
        "French": "FR",
        "Spanish": "ES",
        "German": "DE",
        "Russian": "RU",
        "Arabic": "SA",
        "Italian": "IT",
        "Japanese": "JP",
        "Polish": "PL"
    };

    if (flagIcon) {
        flagIcon.src = `https://flagsapi.com/${flags[language] || "US"}/flat/64.png`;
    }
}

// Function to load language file and update text
function changeLanguage(lang) {
    fetch(`/Supported Languages/languages.json`)
        .then(response => {
            if (!response.ok) throw new Error(`Language file not found`);
            return response.json();
        })
        .then(data => {
            Object.keys(data).forEach(key => {
                document.querySelectorAll(`.${key}`).forEach(el => {
                    el.innerText = data[key][lang] || data[key]["en"]; // Default to English if the key is missing
                });
            });
        })
        .catch(error => console.error("Error loading language file:", error));
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown-options");
    const dropdownSelected = document.querySelector(".dropdown-selected");

    if (dropdown && dropdownSelected) {
        if (!dropdown.contains(event.target) && !dropdownSelected.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    }
});






