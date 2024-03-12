function changeLanguage() {
    var selectedLanguage = document.getElementById("languageSelect").value;
    // Store the selected language in local storage
    localStorage.setItem("selectedLanguage", selectedLanguage);
    fetchLanguageContent(selectedLanguage);
}

function fetchLanguageContent(language) {
    fetch(`./translations/${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Update card titles with translations
            document.getElementById("welcome").innerText = data.welcome;
            document.getElementById("aboutMe").innerText = data.about_me;
            document.getElementById("myJourney").innerText = data.my_journey;
            document.getElementById("myExperience").innerText = data.my_experience;
            document.getElementById("whatIKnow").innerText = data.what_i_know;
            document.getElementById("myLearningApproach").innerText = data.my_learning_approach;
            document.getElementById("myShortTermGoals").innerText = data.my_short_term_goals;
            // update the card contents with translations
            document.getElementById("myJourneyContent").innerHTML = data.my_journey_content;
            document.getElementById("myExperienceContent").innerHTML = data.my_experience_content;
            document.getElementById("whatIKnowContent").innerHTML = data.what_i_know_content;
            document.getElementById("myLearningApproachContent").innerHTML = data.my_learning_approach_content;
            document.getElementById("myShortTermGoalsContent").innerHTML = data.my_short_term_goals_content;
            document.getElementById("myShortTermGoalsList").innerHTML = data.my_short_term_goals_list;
        })
        .catch(error => console.error('Error fetching translations:', error));
}

//check and load initial language preference
function loadInitialLanguage() {
    var storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
        document.getElementById("languageSelect").value = storedLanguage;
        fetchLanguageContent(storedLanguage);
    } else {
        fetchLanguageContent("en")
    }
}

// Load initial language preference
loadInitialLanguage();

// Function to change theme
function changeTheme(theme) {
    // Update CSS variables based on the selected theme
    switch (theme) {
        case 'dark':
            document.documentElement.setAttribute('data-theme', 'dark');
            break;
        case 'light':
            document.documentElement.setAttribute('data-theme', 'light');
            break;
        case 'purple':
            document.documentElement.setAttribute('data-theme', 'purple');
            break;
        case 'blue':
            document.documentElement.setAttribute('data-theme', 'blue');
            break;
        default:
            break;
    }

    // Store the selected theme in local storage
    localStorage.setItem("selectedTheme", theme);
}

// Function to check and load initial theme preference
function loadInitialTheme() {
    var storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
        changeTheme(storedTheme);
    } else {
        // Default to the dark theme if no theme is stored
        changeTheme("dark");
    }
}

// Load initial theme preference
loadInitialTheme();