function changeLanguage() {
    var selectedLanguage = document.getElementById("languageSelect").value;
    fetch(`./translations/${selectedLanguage}.json`)
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
        })
        .catch(error => console.error('Error fetching translations:', error));
}

// Load initial translations
changeLanguage();