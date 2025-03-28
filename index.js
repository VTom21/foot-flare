var app = angular.module("index", []);
app.controller("indexController", function ($scope) {
    $scope.isDarkMode = localStorage.getItem("darkMode") === "true";
    $scope.logo_src = "logos/logo-no-background.png";
    
    if ($scope.isDarkMode) {
        document.body.classList.add("dark-mode");
    }
    $scope.toggleDarkMode = function () {
        $scope.isDarkMode = !$scope.isDarkMode;
        localStorage.setItem("darkMode", $scope.isDarkMode);
    
        document.body.classList.toggle("dark-mode", $scope.isDarkMode);
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


function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-options");
    if (!dropdown) {
        console.error("Dropdown options not found!");
        return;
    }

    dropdown.classList.toggle("show");
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader); 
    });

    updateFlag("English");
});


function selectLanguage(element) {
    if (!element) return;

    const selectedText = element.innerText;
    const selectedValue = element.getAttribute("data-value");

    const dropdownSelected = document.querySelector(".dropdown-selected");
    if (dropdownSelected) {
        dropdownSelected.innerHTML = `${selectedText} <span class="arrow">▼</span>`;
    }

    document.getElementById("dropdown-options").classList.remove("show");

    updateFlag(selectedText);
    changeLanguage(selectedValue);
}

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
        "Polish": "PL",
        "Portuguese": "PT",
        "Chinese": "CN"
    };

    if (flagIcon) {
        flagIcon.src = `https://flagsapi.com/${flags[language] || "US"}/shiny/64.png`;
    }
}


function changeLanguage(lang) {
    fetch(`/Supported Languages/index.json`)
        .then(response => {
            if (!response.ok) throw new Error(`Language file not found`);
            return response.json();
        })
        .then(data => {
            Object.keys(data).forEach(key => {
                document.querySelectorAll(`.${key}`).forEach(el => {
                    el.innerText = data[key][lang] || data[key]["en"]; 
                });
            });
        })
        .catch(error => console.error("Error loading language file:", error));
}


document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown-options");
    const dropdownSelected = document.querySelector(".dropdown-selected");

    if (dropdown && dropdownSelected) {
        if (!dropdown.contains(event.target) && !dropdownSelected.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    }
});






