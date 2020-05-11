responsiveVoice.setDefaultVoice("US English Male");

export const speech = {
    changeVoice: () => {
        let speeches = ['US Voice 1', 'US Voice 2', 'UK Voice 1', 'UK Voice 2'];
        let usMale = document.querySelector(".us_male");
        let usFemale = document.querySelector(".us_female");
        let ukMale = document.querySelector(".uk_male");
        let ukFemale = document.querySelector(".uk_female");
        let changeVoiceContainer = document.querySelector(".change_voice");

        changeVoiceContainer.addEventListener('click', (e) => {
            if (e.target.textContent.trim() === speeches[0]) {
                responsiveVoice.setDefaultVoice("US English Female");
                responsiveVoice.speak("US Voice 2");
                usMale.classList.toggle('switch_off');
                usFemale.classList.toggle('switch_off');
            }
            if (e.target.textContent.trim() === speeches[1]) {
                responsiveVoice.setDefaultVoice("UK English Male");
                responsiveVoice.speak("UK Voice 1");
                usFemale.classList.toggle('switch_off');
                ukMale.classList.toggle('switch_off');
            }
            if (e.target.textContent.trim() === speeches[2]) {
                responsiveVoice.setDefaultVoice("UK English Female");
                responsiveVoice.speak("UK Voice 2");
                ukMale.classList.toggle('switch_off');
                ukFemale.classList.toggle('switch_off');
            }
            if (e.target.textContent.trim() === speeches[3]) {
                responsiveVoice.setDefaultVoice("US English Male");
                responsiveVoice.speak("US Voice 1");
                ukFemale.classList.toggle('switch_off');
                usMale.classList.toggle('switch_off');
            }
        });
    },

    speechVoice: (word) => {
        responsiveVoice.speak(word);
    },
};